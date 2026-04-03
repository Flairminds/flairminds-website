import express from 'express';
import rateLimit from 'express-rate-limit';
import { askQuestion } from '../controllers/chatController.js';
import { verifyOrigin } from '../middlewares/verifyOrigin.js';

const router = express.Router();

// Rate limiting: max 10 requests per minute per IP for chat
const chatRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minute)
    message: { error: 'Too many requests, please try again after a minute.' },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// POST /chat/ask
// Body: { question: string, history: Array<{ role: 'user'|'bot', text: string }> }
router.post('/ask', verifyOrigin, chatRateLimiter, askQuestion);

export default router;
