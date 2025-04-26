import express from 'express';
import { createSession, updateSessionCompletion } from '../controllers/sessionController.js';

const router = express.Router();

router.post('/', createSession);
router.put('/:session_id', updateSessionCompletion);

export default router;
