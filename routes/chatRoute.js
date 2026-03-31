import express from 'express';
import { askQuestion } from '../controllers/chatController.js';

const router = express.Router();

// POST /chat/ask
// Body: { question: string, history: Array<{ role: 'user'|'bot', text: string }> }
router.post('/ask', askQuestion);

export default router;
