import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Chatbot.module.css';
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { MdOutlineSmartToy } from 'react-icons/md';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001';

/* ─── Markdown-to-React renderer ───────────────────────────────────────────
   Block-based: split on \n\n for paragraphs so punctuation after links
   stays inline. Single \n within a block becomes a <br>.
────────────────────────────────────────────────────────────────────────── */

// Process inline content: **bold** and [label](url) links — in one pass
const renderInline = (text, keyPrefix = '') => {
    const parts = [];
    const inlineRegex = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIdx = 0;
    let match;

    while ((match = inlineRegex.exec(text)) !== null) {
        if (match.index > lastIdx) {
            parts.push(text.slice(lastIdx, match.index));
        }
        if (match[1] !== undefined) {
            // **bold**
            parts.push(<strong key={`${keyPrefix}-b-${match.index}`}>{match[1]}</strong>);
        } else {
            // [label](url)
            const label = match[2];
            const url = match[3];
            if (url.startsWith('/')) {
                parts.push(
                    <Link key={`${keyPrefix}-l-${match.index}`} to={url} className={styles.chatLink}>
                        {label}
                    </Link>
                );
            } else {
                parts.push(
                    <a key={`${keyPrefix}-a-${match.index}`} href={url} target="_blank" rel="noopener noreferrer" className={styles.chatLink}>
                        {label}
                    </a>
                );
            }
        }
        lastIdx = inlineRegex.lastIndex;
    }
    if (lastIdx < text.length) parts.push(text.slice(lastIdx));
    return parts;
};

// Render one paragraph block (no \n\n inside)
const renderBlock = (block, blockIdx) => {
    const lines = block.split('\n');
    const elements = [];

    lines.forEach((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return;

        if (trimmed.startsWith('## ')) {
            elements.push(<strong key={`h2-${blockIdx}-${i}`} className={styles.msgH2}>{renderInline(trimmed.slice(3), `h2-${blockIdx}-${i}`)}</strong>);
        } else if (trimmed.startsWith('# ')) {
            elements.push(<strong key={`h1-${blockIdx}-${i}`} className={styles.msgH1}>{renderInline(trimmed.slice(2), `h1-${blockIdx}-${i}`)}</strong>);
        } else if (trimmed.match(/^[-*] /)) {
            elements.push(
                <span key={`li-${blockIdx}-${i}`} className={styles.msgBullet}>
                    {'• '}{renderInline(trimmed.slice(2), `li-${blockIdx}-${i}`)}
                </span>
            );
        } else {
            // Regular paragraph line — punctuation after links stays inline here
            elements.push(<span key={`p-${blockIdx}-${i}`}>{renderInline(trimmed, `p-${blockIdx}-${i}`)}</span>);
        }

        // Single <br> between lines within the same block (not after the last)
        if (i < lines.length - 1 && trimmed) {
            elements.push(<br key={`br-${blockIdx}-${i}`} />);
        }
    });

    return <div key={`block-${blockIdx}`} className={styles.msgBlock}>{elements}</div>;
};

// Top-level: split on blank lines → paragraph blocks
const renderMarkdown = (text) => {
    const normalised = text.replace(/\n{3,}/g, '\n\n').trim();
    return normalised.split('\n\n').map((block, i) => renderBlock(block.trim(), i));
};

/* ─── Component ─────────────────────────────────────────────────────────── */

const WELCOME_MESSAGE = {
    role: 'bot',
    text: "Hi! I'm the FlairMinds assistant 👋 Ask me anything about our services, case studies, blogs, or how to get in touch. I'll point you in the right direction!",
    id: 'welcome',
};

const SUGGESTED_QUESTIONS = [
    'What services does FlairMinds offer?',
    'Tell me about the SwiftIQ case study',
    'How can I contact FlairMinds?',
    'What AI capabilities does FlairMinds have?',
];

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open, messages]);

    const sendMessage = async (text) => {
        const question = (text || input).trim();
        if (!question || loading) return;

        setShowSuggestions(false);
        setInput('');

        const userMsg = { role: 'user', text: question, id: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setLoading(true);

        const history = messages
            .filter(m => m.id !== 'welcome')
            .map(m => ({ role: m.role, text: m.text }));

        try {
            const res = await fetch(`${API_BASE}/chat/ask`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question, history }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'API error');

            setMessages(prev => [...prev, {
                role: 'bot',
                text: data.answer,
                id: Date.now() + 1,
            }]);
        } catch (err) {
            setMessages(prev => [...prev, {
                role: 'bot',
                text: "Sorry, I couldn't reach the server right now. Please try again in a moment, or [contact us](/contact) directly!",
                id: Date.now() + 1,
                error: true,
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* ── Floating Button ── */}
            <button
                className={`${styles.floatBtn} ${open ? styles.floatBtnOpen : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-label="Open FlairMinds chat assistant"
                id="chatbot-toggle-btn"
            >
                {open ? <FaTimes /> : <div style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}><MdOutlineSmartToy /><span style={{ fontSize: '15px', marginLeft: '5px' }}>Assistance</span></div>}
                {!open && <span className={styles.floatPulse} />}
            </button>

            {/* ── Chat Panel ── */}
            <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`} role="dialog" aria-label="FlairMinds Chat Assistant">

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerAvatar}>
                            <FaRobot />
                        </div>
                        <div>
                            <div className={styles.headerName}>FlairMinds Assistant</div>
                            <div className={styles.headerStatus}>
                                <span className={styles.statusDot} />
                                Always Online
                            </div>
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close chat">
                        <FaTimes />
                    </button>
                </div>

                {/* Messages */}
                <div className={styles.messages} id="chatbot-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`${styles.msgRow} ${msg.role === 'user' ? styles.msgRowUser : styles.msgRowBot}`}>
                            {msg.role === 'bot' && (
                                <div className={styles.botAvatar}><FaRobot /></div>
                            )}
                            <div className={`${styles.bubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleBot} ${msg.error ? styles.bubbleError : ''}`}>
                                {msg.role === 'bot' ? renderMarkdown(msg.text) : msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {loading && (
                        <div className={`${styles.msgRow} ${styles.msgRowBot}`}>
                            <div className={styles.botAvatar}><FaRobot /></div>
                            <div className={`${styles.bubble} ${styles.bubbleBot} ${styles.typing}`}>
                                <span /><span /><span />
                            </div>
                        </div>
                    )}

                    {/* Suggested questions */}
                    {showSuggestions && messages.length === 1 && (
                        <div className={styles.suggestions}>
                            {SUGGESTED_QUESTIONS.map((q, i) => (
                                <button key={i} className={styles.suggestionBtn} onClick={() => sendMessage(q)}>
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className={styles.inputRow}>
                    <input
                        ref={inputRef}
                        className={styles.input}
                        placeholder="Ask anything about FlairMinds…"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        disabled={loading}
                        aria-label="Chat input"
                        id="chatbot-input"
                        maxLength={500}
                    />
                    <button
                        className={styles.sendBtn}
                        onClick={() => sendMessage()}
                        disabled={loading || !input.trim()}
                        aria-label="Send message"
                        id="chatbot-send-btn"
                    >
                        {loading ? <FaSpinner className={styles.spin} /> : <FaPaperPlane />}
                    </button>
                </div>

                <div className={styles.footer}>Powered by Gemini · FlairMinds AI</div>
            </div>
        </>
    );
}
