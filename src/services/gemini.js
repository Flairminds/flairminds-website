 import { products } from "../data/productsData";

 const API_KEY = "AIzaSyChvE5NVWpYO84g5JLzIPXybesRXFLQY7s";
 const MODEL = "gemini-2.5-flash";
 const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

 function buildCorpus() {
   return products.map((p) => ({
     id: p.id,
     linkDisplay: p.linkDisplay,
     name: p.name,
     tags: p.tags || [],
     techTags: p.techTags || [],
     status: p.status || "",
     tagline: p.tagline || "",
     list: p.list || [],
     detailsParagraphs: p.detailsParagraphs || [],
     highlight: p.highlight || [],
   }));
 }

 function extractJsonArray(text) {
   if (!text) return null;
   const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
   const body = fenced ? fenced[1] : text;
   const arrayMatch = body.match(/\[([\s\S]*?)\]/);
   const candidate = arrayMatch ? `[${arrayMatch[1]}]` : body;
   try {
     const parsed = JSON.parse(candidate);
     return Array.isArray(parsed) ? parsed : null;
   } catch (_) {
     return null;
   }
 }

 async function callGemini(promptText, corpus) {
   if (!API_KEY) throw new Error("Missing VITE_GEMINI_API_KEY");
   const sys =
     `You are an AI-powered semantic product finder. Given a JSON array named corpus of product objects, analyze the user’s query using deep semantic understanding and reasoning. Identify products that:
     Directly match the user’s query text, or
     Are useful, relevant, or commonly associated with the query’s intent, audience, or domain — even if not explicitly described that way in the product data.
     Infer meaning from context (e.g., if the query is “for lawyers,” include legal, contract, or document-management products; if “for students,” include learning or note-taking tools).
     Prefer returning 3–6 of the most contextually relevant items.
     Respond ONLY with a JSON array of objects containing either id or linkDisplay, no prose.`;
   const user =
     `corpus:\n${JSON.stringify(corpus)}\n\nquery:\n${promptText}\n\nReturn format example: [{"id":1},{"linkDisplay":"document_search"}]`;
   const body = {
     contents: [
       { role: "user", parts: [{ text: `${sys}\n\n${user}` }] },
     ],
     generationConfig: { temperature: 0.2, maxOutputTokens: 8192 },
   };
   const res = await fetch(ENDPOINT, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(body),
   });
   if (!res.ok) {
     const t = await res.text().catch(() => "");
     throw new Error(`Gemini error ${res.status}: ${t}`);
   }
   const data = await res.json();
   const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
   const arr = extractJsonArray(text);
   if (!arr) return [];
   return arr;
 }

 function mergeResultsToProducts(idsOrKeys) {
   const byId = new Map(products.map((p) => [String(p.id), p]));
   const byKey = new Map(products.map((p) => [String(p.linkDisplay), p]));
   const out = [];
   const seen = new Set();
   for (const item of idsOrKeys) {
     const id = item?.id != null ? String(item.id) : null;
     const key = item?.linkDisplay != null ? String(item.linkDisplay) : null;
     let p = null;
     if (id && byId.has(id)) p = byId.get(id);
     else if (key && byKey.has(key)) p = byKey.get(key);
     if (p && !seen.has(p.id)) {
       seen.add(p.id);
       out.push(p);
     }
   }
   return out;
 }

 export async function filterProductsByPrompt(promptText) {
   const corpus = buildCorpus();
   const selection = await callGemini(promptText, corpus);
   const productsOut = mergeResultsToProducts(selection);
   if (productsOut.length > 0) return productsOut;
   const lowered = promptText.toLowerCase();
   const fallback = products.filter((p) => {
     const fields = [
       p.name,
       p.tagline,
       ...(p.tags || []),
       ...(p.techTags || []),
       ...(p.detailsParagraphs || []),
       ...(p.list || []),
       ...(p.highlight || []),
     ]
       .filter(Boolean)
       .join(" \n ")
       .toLowerCase();
     return fields.includes(lowered);
   });
   return fallback;
 }

