# Building an AI-Powered Web Scraping & Report Generation System: Technical Deep Dive

> A comprehensive look at the engineering challenges and solutions behind combining async web crawling, document parsing, and LLM integration in a Streamlit application.

---

## Tech Stack at a Glance

| Component | Technology | Version |
|-----------|------------|---------|
| UI Framework | Streamlit | 1.51 |
| Web Scraping | Crawl4AI | 0.7.6 |
| Video Transcripts | youtube-transcript-api | 1.2.3 |
| LLM | Google Gemini (google-generativeai) | 0.8.5 |
| Document Parsing | PyPDF2, python-docx | 3.0.1, 1.2.0 |
| Browser Automation | Playwright | 1.55.0 |

---

## Technical Challenge #1: Async Operations Inside Streamlit's Sync Context

### The Problem

Crawl4AI is built on async/await patterns for efficient I/O operations. However, Streamlit runs in a synchronous context that may already have an event loop running. Calling `asyncio.run()` inside an existing loop raises:

```
RuntimeError: This event loop is already running
```

### The Solution: Thread Delegation with Queue-Based Communication

```python
def run(url: str) -> str:
    try:
        loop = asyncio.get_running_loop()
    except RuntimeError:
        loop = None

    if loop and loop.is_running():
        # Already in an async context - delegate to a separate thread
        q: queue.Queue[tuple[bool, object]] = queue.Queue()

        def worker():
            new_loop = asyncio.new_event_loop()
            asyncio.set_event_loop(new_loop)
            try:
                res = new_loop.run_until_complete(scrape(url))
                q.put((True, res))
            except Exception as e:
                q.put((False, e))
            finally:
                new_loop.close()

        t = threading.Thread(target=worker, daemon=True)
        t.start()
        ok, val = q.get()  # Block until result ready
        if ok:
            return val
        raise val
    else:
        # No existing loop - safe to use asyncio.run()
        return asyncio.run(scrape(url))
```

**Key Engineering Decisions:**
- **Thread isolation**: Each async operation gets its own event loop in a dedicated thread
- **Queue-based result passing**: Thread-safe communication without shared mutable state
- **Daemon threads**: Auto-cleanup on application exit
- **Tuple unpacking for errors**: Preserves exception type and traceback

### Windows-Specific Event Loop Policy

Windows requires special handling for async subprocess operations:

```python
if sys.platform.startswith("win"):
    asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
```

The `ProactorEventLoop` is required on Windows for proper subprocess and pipe handling that Crawl4AI uses internally.

---

## Technical Challenge #2: Unified Content Extraction from Heterogeneous Sources

### The Problem

Different source types require different extraction strategies:
- **Web URLs**: Need headless browser rendering for JavaScript-heavy sites
- **YouTube URLs**: Standard scraping fails—need transcript API
- **PDFs**: Binary format requiring specialized parsing
- **DOCX**: XML-based format with paragraph structure

### The Solution: Smart Routing with Fallback Chains

```python
async def scrape(url: str) -> str:
    # Route based on URL pattern
    if _is_youtube_url(url):
        vid = _extract_youtube_video_id(url)
        if vid:
            try:
                return _fetch_youtube_transcript_text(vid)
            except Exception:
                pass  # Fallback to web crawling
    
    # Default: headless browser crawl
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url)
        return result.markdown or ""
```

**YouTube URL Detection — Handling Multiple Formats:**

```python
def _is_youtube_url(url: str) -> bool:
    parsed = urlparse(url)
    host = (parsed.netloc or "").lower()
    return any(h in host for h in ["youtube.com", "youtu.be"])

def _extract_youtube_video_id(url: str) -> str | None:
    parsed = urlparse(url)
    host = (parsed.netloc or "").lower()
    
    # Short URLs: https://youtu.be/<id>
    if "youtu.be" in host:
        return parsed.path.strip("/") or None
    
    if "youtube.com" in host:
        # Watch URLs: ?v=<id>
        qs = parse_qs(parsed.query)
        if "v" in qs and qs["v"]:
            return qs["v"][0]
        
        # Shorts/Embed/Live: /shorts/<id>, /embed/<id>, /live/<id>
        parts = [p for p in parsed.path.split("/") if p]
        if len(parts) >= 2 and parts[0] in {"shorts", "embed", "live", "v"}:
            return parts[1]
    
    return None
```

**Document Extraction — Format-Specific Handlers:**

```python
def extract_text_from_path(path: Path) -> str:
    suffix = path.suffix.lower()
    
    if suffix in [".txt", ".md"]:
        return path.read_text(encoding="utf-8", errors="ignore")
    
    if suffix == ".pdf":
        text_parts = []
        with path.open("rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                try:
                    text_parts.append(page.extract_text() or "")
                except Exception:
                    continue  # Skip corrupted pages
        return "\n".join(text_parts).strip()
    
    if suffix == ".docx":
        doc = Document(str(path))
        return "\n".join(p.text for p in doc.paragraphs)
    
    # Fallback: try UTF-8 decode
    return path.read_text(encoding="utf-8", errors="ignore")
```

---

## Technical Challenge #3: LLM API Reliability and Model Fallback

### The Problem

LLM APIs can fail for various reasons:
- Rate limiting
- Model deprecation
- Temporary outages
- Quota exhaustion

A single API call failure shouldn't break the entire workflow.

### The Solution: Cascading Model Fallback

```python
def summarize_with_gemini(text: str, prompt: str | None = None) -> str:
    genai.configure(api_key=api_key)
    
    # Ordered by preference: latest → stable fallbacks
    choices = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-2.5-flash-lite",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
    ]
    
    last_err: Exception | None = None
    for name in choices:
        try:
            model = genai.GenerativeModel(name)
            resp = model.generate_content(full_prompt)
            
            # Handle different response structures
            if hasattr(resp, "text") and resp.text:
                return resp.text
            
            # Fallback: extract from candidates
            if hasattr(resp, "candidates") and resp.candidates:
                parts = []
                for c in resp.candidates:
                    ct = getattr(c, "content", None)
                    if ct and getattr(ct, "parts", None):
                        for p in ct.parts:
                            val = getattr(p, "text", None) or str(p)
                            parts.append(val)
                if parts:
                    return "\n".join(parts)
        except Exception as e:
            last_err = e
            continue  # Try next model
    
    if last_err:
        raise last_err
    return ""
```

**Engineering Considerations:**
- **Response structure handling**: Gemini SDK response objects vary—defensive attribute access required
- **Preserving the last error**: If all models fail, raise the most recent exception for debugging
- **Order matters**: Prefer faster/cheaper models first, fall back to more capable ones

---

## Technical Challenge #4: Safe Filename Generation from URLs

### The Problem

URLs contain characters that are invalid in filenames across different operating systems:
- Slashes (`/`, `\`)
- Query strings (`?`, `&`, `=`)
- Colons (`:`)
- Special characters

Additionally, different URLs might generate the same filename, causing data overwrites.

### The Solution: Slugification with Hash-Based Uniqueness

```python
def _safe_filename_from_url(url: str) -> str:
    parsed = urlparse(url)
    host = parsed.netloc or "site"
    path = parsed.path.strip("/")
    raw_base = f"{host}_{path}" if path else host
    
    # Slugify: convert invalid chars to underscores
    chars = []
    for ch in raw_base:
        if ch.isalnum() or ch in "-_.":
            chars.append(ch)
        else:
            chars.append("_")
    base = "".join(chars).strip("._-") or "item"
    
    # Collapse consecutive underscores
    while "__" in base:
        base = base.replace("__", "_")
    
    # Add hash for uniqueness (handles query strings, fragments)
    digest = hashlib.sha1(url.encode("utf-8")).hexdigest()[:8]
    
    # Ensure max length 64 chars including suffix
    suffix = f"_{digest}.txt"
    max_base_len = 64 - len(suffix)
    base = base[:max_base_len]
    
    return f"{base}{suffix}"
```

**Why SHA1?**
- Fast computation
- 8-character prefix provides ~4 billion unique values
- Full URL is hashed, preserving query string uniqueness

---

## Technical Challenge #5: Markdown to DOCX Conversion with Formatting Preservation

### The Problem

Enterprise users need Word documents, but LLM output is Markdown. The conversion must preserve:
- Heading hierarchy (H1-H6)
- Inline formatting (bold, italic, code)
- Bullet and numbered lists
- Code blocks with monospace font

### The Solution: Regex-Based Markdown Parser

```python
def _add_inline_markdown(paragraph, text: str):
    """Process inline markdown: **bold**, *italic*, `code`"""
    pattern = re.compile(r"(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)")
    pos = 0
    
    for m in pattern.finditer(text):
        # Add plain text before match
        if m.start() > pos:
            paragraph.add_run(text[pos:m.start()])
        
        token = m.group(0)
        if token.startswith("**"):
            r = paragraph.add_run(token[2:-2])
            r.bold = True
        elif token.startswith("*"):
            r = paragraph.add_run(token[1:-1])
            r.italic = True
        elif token.startswith("`"):
            r = paragraph.add_run(token[1:-1])
            r.font.name = "Courier New"
        
        pos = m.end()
    
    # Add remaining text
    if pos < len(text):
        paragraph.add_run(text[pos:])


def markdown_to_docx_bytes(md: str) -> bytes:
    doc = Document()
    in_code_block = False
    
    for raw_line in md.splitlines():
        line = raw_line.rstrip("\n\r")
        
        # Toggle code block state
        if line.strip().startswith("```"):
            in_code_block = not in_code_block
            continue
        
        # Code block content → monospace
        if in_code_block:
            p = doc.add_paragraph()
            r = p.add_run(line)
            r.font.name = "Courier New"
            continue
        
        # Headings: # to ######
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            level = len(m.group(1))
            p = doc.add_paragraph(style=f"Heading {min(level, 6)}")
            _add_inline_markdown(p, m.group(2).strip())
            continue
        
        # Bullet lists: -, *, +
        if re.match(r"^\s*[-*+]\s+", line):
            content = re.sub(r"^\s*[-*+]\s+", "", line)
            p = doc.add_paragraph(style="List Bullet")
            _add_inline_markdown(p, content)
            continue
        
        # Numbered lists: 1. or 1)
        if re.match(r"^\s*\d+[.)]\s+", line):
            content = re.sub(r"^\s*\d+[.)]\s+", "", line)
            p = doc.add_paragraph(style="List Number")
            _add_inline_markdown(p, content)
            continue
        
        # Regular paragraph
        if line.strip():
            p = doc.add_paragraph()
            _add_inline_markdown(p, line)
        else:
            doc.add_paragraph("")
    
    # Serialize to bytes
    buf = BytesIO()
    doc.save(buf)
    buf.seek(0)
    return buf.getvalue()
```

---

## Technical Challenge #6: State Management and Data Isolation

### The Problem

Multiple users share the same application instance. Each user's data must be:
- Isolated from other users
- Persisted across sessions
- Efficiently queryable

### The Solution: TSV-Based Index Files with User ID Column

**Index File Structure:**
```
URL \t Filename \t Timestamp \t UserID \t UploadFlag \t Title
```

```python
def _read_index(index_path: Path) -> list[tuple[str, str, str, str, str, str]]:
    entries = []
    if index_path.exists():
        for line in index_path.read_text(encoding="utf-8").splitlines():
            parts = line.split("\t")
            # Handle variable column counts for backward compatibility
            if len(parts) >= 6:
                entries.append(tuple(p.strip() for p in parts[:6]))
            elif len(parts) >= 2:
                # Pad missing columns
                padded = parts + [""] * (6 - len(parts))
                entries.append(tuple(p.strip() for p in padded[:6]))
    return entries


def _write_index(index_path: Path, entries: list) -> None:
    with index_path.open("w", encoding="utf-8") as f:
        for url, fname, ts, user_id, uploaded_flag, title in entries:
            ts_out = ts or _now_ts()
            f.write(f"{url}\t{fname}\t{ts_out}\t{user_id}\t{uploaded_flag}\t{title}\n")
```

**User Filtering in UI:**

```python
# Filter entries by current user
for line in index_path.read_text(encoding="utf-8").splitlines():
    parts = line.split("\t")
    uid = parts[3].strip() if len(parts) >= 4 else ""
    if uid == st.session_state.current_user.get("id"):
        # Include this entry
        entries.append(...)
```

---

## Technical Challenge #7: Duplicate Detection with Graceful Replace Flow

### The Problem

Users might accidentally re-extract the same URL, potentially losing previous data. The system needs:
- Duplicate detection before extraction
- Explicit user confirmation for overwrites
- Clean removal of old records

### The Solution: Confirmation State Machine

```python
# In the UI layer
replace_key = "replace_confirmed_url"
user_url = url.strip()

# Build set of existing URLs for current user
existing_urls = set()
for line in index_path.read_text().splitlines():
    parts = line.split("\t")
    if len(parts) >= 4:
        u, uid = parts[0].strip(), parts[3].strip()
        if uid == current_user_id:
            existing_urls.add(u)

# Check for duplicate
if user_url in existing_urls and st.session_state.get(replace_key) != user_url:
    st.warning("URL already extracted. Re-extract and replace?")
    
    if st.button("Re-extract and Replace"):
        st.session_state[replace_key] = user_url
        st.rerun()
    
    if st.button("Cancel"):
        st.info("Cancelled.")
    
    st.stop()  # Halt execution until user decides

# If confirmed, proceed with replace=True
replace = st.session_state.get(replace_key) == user_url
```

**Removal Logic:**

```python
def _remove_existing(url: str, out_dir: str, user_id: str = "") -> list[Path]:
    index_path = Path(out_dir) / "index.txt"
    entries = _read_index(index_path)
    
    kept, removed = [], []
    for u, fname, ts, uid, upl, title in entries:
        if u == url and (not user_id or uid == user_id):
            # Delete file and skip this entry
            fp = Path(out_dir) / fname
            if fp.exists():
                fp.unlink()
                removed.append(fp)
        else:
            kept.append((u, fname, ts, uid, upl, title))
    
    _write_index(index_path, kept)
    return removed
```

---

## Technical Challenge #8: YouTube Transcript Extraction

### The Problem

YouTube doesn't provide a public API for transcripts. The `youtube-transcript-api` uses internal endpoints that:
- May have transcripts disabled
- Might not have the preferred language
- Could fail for private/unavailable videos

### The Solution: Graceful Degradation

```python
def _fetch_youtube_transcript_text(video_id: str) -> str:
    try:
        ytt_api = YouTubeTranscriptApi()
        transcript_list = ytt_api.fetch(video_id)
        
        text = ""
        for snippet in transcript_list:
            text += "\n" + snippet.text
        
        header = f"YouTube Transcript (video_id={video_id})\n\n"
        return header + text.strip()
    
    except TranscriptsDisabled:
        return f"YouTube Transcript (video_id={video_id})\n\nTranscripts are disabled for this video."
    
    except (NoTranscriptFound, VideoUnavailable) as e:
        return f"YouTube Transcript (video_id={video_id})\n\nTranscript not found: {e}"
    
    except Exception as e:
        # Re-raise for fallback to web scraping
        raise e
```

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              STREAMLIT UI (app.py)                          │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐                     │
│  │    Home     │  │ Extracted    │  │  Build Report   │                     │
│  │  (Extract)  │  │    Data      │  │   (Synthesis)   │                     │
│  └──────┬──────┘  └──────┬───────┘  └────────┬────────┘                     │
└─────────┼────────────────┼───────────────────┼──────────────────────────────┘
          │                │                   │
          ▼                ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            CORE ENGINE (main.py)                            │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                      ASYNC SCRAPING LAYER                            │   │
│  │  ┌─────────────┐  ┌──────────────────┐  ┌─────────────────────────┐  │   │
│  │  │  Crawl4AI   │  │  YouTube         │  │  Thread Delegation      │  │   │
│  │  │  (Browser)  │  │  Transcript API  │  │  (Event Loop Isolation) │  │   │
│  │  └─────────────┘  └──────────────────┘  └─────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                      DOCUMENT PARSING LAYER                          │   │
│  │  ┌─────────┐  ┌───────────┐  ┌──────────────────────────────────┐    │   │
│  │  │ PyPDF2  │  │ python-   │  │  Plain Text / Markdown           │    │   │
│  │  │ (PDF)   │  │ docx      │  │  (UTF-8 decode with error skip)  │    │   │
│  │  └─────────┘  └───────────┘  └──────────────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                      LLM INTEGRATION LAYER                           │   │
│  │  ┌────────────────────────────────────────────────────────────────┐  │   │
│  │  │  Gemini API  →  Model Fallback Chain  →  Response Normalization│  │   │
│  │  └────────────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                      PERSISTENCE LAYER                               │   │
│  │  extracted_data/  │  processed_data/  │  generated_reports/         │   │
│  │  ├── index.txt    │  ├── index.txt    │  ├── index.txt              │   │
│  │  └── *.txt        │  └── *.txt        │  └── *.txt                  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

| Challenge | Solution | Key Technique |
|-----------|----------|---------------|
| Async in sync context | Thread delegation | `threading.Thread` + `queue.Queue` |
| Heterogeneous sources | Smart routing with fallback | URL pattern matching + exception handling |
| LLM reliability | Model cascade | Ordered fallback with preserved errors |
| Safe filenames | Slugification + hashing | Regex sanitization + SHA1 prefix |
| Markdown → DOCX | Line-by-line parsing | Regex pattern matching + python-docx |
| User isolation | Index file filtering | TSV with UserID column |
| Duplicate handling | Confirmation state machine | `st.session_state` + `st.rerun()` |
| YouTube transcripts | Graceful degradation | Exception-specific error messages |

---

## Conclusion

Building a production-ready web scraping and LLM integration system involves solving numerous edge cases and platform-specific issues. The key patterns demonstrated here—thread-based async isolation, cascading fallbacks, and defensive data handling—are applicable to any Python application integrating external APIs with complex I/O patterns.

The combination of Streamlit for rapid prototyping, Crawl4AI for robust web scraping, and Gemini for intelligent summarization creates a powerful foundation that can be extended to various domains beyond financial analysis.

---

*Built by Flairminds — Turning complex data pipelines into simple workflows.*
