import express from 'express';
import { connectPartner, getUser } from '../controllers/userController.js';
const router = express.Router();

// Routes for profile
router.get('/:id', getUser);  // Get a specific user's profile by ID
router.post('/connect-partner', connectPartner);

export default router;  // Correct export
