import { GoogleGenerativeAI } from '@google/generative-ai';
import websiteKnowledge from '../knowledge/website-knowledge.js';

const GEMINI_KEY = process.env.GEMINI_API_KEY || 'AIzaSyC9RE8U-UPMMqI5pyXUocUQlCC0vVCspWI';
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// Models to try in order — if one fails (e.g. 404 not available), the next is used
const MODEL_FALLBACKS = [
    'gemini-2.5-flash',
    'gemini-3.0-flash',
    'gemini-2.0-flash-lite',
];

const SYSTEM_INSTRUCTION = `You are the FlairMinds website assistant — a helpful, knowledgeable, and professional AI chatbot embedded on the FlairMinds company website.

Your job is to help visitors understand what FlairMinds does, which services they offer, their case studies, blogs, and how to get in touch.

## Instructions:

1. **Use the knowledge base below** to answer questions accurately. Do not fabricate services, case studies, or capabilities not mentioned.

2. **Always include relevant page links** when answering. Format them as markdown links with the route path, for example: [SwiftIQ Guard Case Study](/case-study/swiftiq-guard) or [Contact Us](/contact). The frontend will render these as clickable navigation links.

3. **Be concise but thorough.** Use bullet points for lists of services or features. Keep answers under 300 words unless the question genuinely requires more detail.

4. **Be warm and professional.** You're representing FlairMinds. Encourage visitors to reach out via [Contact Us](/contact) if they want to discuss a potential project.

5. **If a question is unrelated to FlairMinds** (e.g. general coding questions, weather, etc.), politely redirect: "I'm here to help you learn about FlairMinds! For anything outside that scope, the web has great resources. Is there something about our services or work I can help with?"

6. **Handle follow-up questions naturally.** Conversation history is provided — use it for context.

---

## FlairMinds Knowledge Base:

${websiteKnowledge}
`;

export const askQuestion = async (req, res) => {
    try {
        const { question, history = [] } = req.body;

        if (!question || question.trim() === '') {
            return res.status(400).json({ error: 'Question is required.' });
        }

        if (!GEMINI_KEY) {
            return res.status(500).json({ error: 'Gemini API key not configured.' });
        }

        // Build chat history for multi-turn conversation
        const formattedHistory = history
            .filter(msg => msg.role && msg.text)
            .map(msg => ({
                role: msg.role === 'bot' ? 'model' : 'user',
                parts: [{ text: msg.text }],
            }));

        let lastError = null;

        // Try each model in the fallback list
        for (const modelName of MODEL_FALLBACKS) {
            try {
                console.log(`[Chatbot] Trying model: ${modelName}`);

                const model = genAI.getGenerativeModel({
                    model: modelName,
                    systemInstruction: SYSTEM_INSTRUCTION,
                });

                const chat = model.startChat({
                    history: formattedHistory,
                    generationConfig: {
                        maxOutputTokens: 600,
                        temperature: 0.7,
                    },
                });

                const result = await chat.sendMessage(question.trim());
                const answer = result.response.text();

                console.log(`[Chatbot] Success with model: ${modelName}`);
                return res.json({ answer, model: modelName });

            } catch (modelError) {
                console.warn(`[Chatbot] Model ${modelName} failed: ${modelError.message}`);
                lastError = modelError;
                // Continue to the next model
            }
        }

        // All models failed
        console.error('[Chatbot] All models failed. Last error:', lastError);

        if (lastError?.message?.includes('API_KEY_INVALID') || lastError?.message?.includes('API key')) {
            return res.status(500).json({ error: 'Invalid Gemini API key. Please check server configuration.' });
        }

        return res.status(500).json({ error: 'All AI models are currently unavailable. Please try again shortly.' });

    } catch (error) {
        console.error('[Chatbot] Unexpected error:', error);
        return res.status(500).json({ error: 'Failed to generate a response. Please try again.' });
    }
};
