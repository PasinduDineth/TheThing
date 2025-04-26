import express from 'express';
import dotenv from 'dotenv';  // Load environment variables
import userRouter from './routes/userRoutes.js';  // Ensure correct paths
import questionRoutes from './routes/questionRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { verifyToken } from './middleware/authMiddleware.js';


dotenv.config();  // Load .env configuration

const app = express();
app.use(express.json());  // Middleware to parse JSON request bodies

// Routes
app.use('/user', verifyToken, userRouter);  // Profiles route
app.use('/questions', verifyToken, questionRoutes);  // Questions route
app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set in .env

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
