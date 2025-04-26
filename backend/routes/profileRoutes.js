import express from 'express';
import { getProfile, updateProfile, getAllProfiles } from '../controllers/profileController.js';  // Named imports

const router = express.Router();

// Routes for profile
router.get('/', getAllProfiles);
router.get('/:id', getProfile);  // Get a specific user's profile by ID
router.put('/:id', updateProfile);  // Update a user's profile

export default router;  // Correct export
