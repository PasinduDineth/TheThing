import express from 'express';
import dotenv from 'dotenv';  // Load environment variables
import profileRoutes from './routes/profileRoutes.js';  // Ensure correct paths
import questionRoutes from './routes/questionRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';

dotenv.config();  // Load .env configuration

const app = express();
app.use(express.json());  // Middleware to parse JSON request bodies

// Routes
app.use('/profiles', profileRoutes);  // Profiles route
app.use('/questions', questionRoutes);  // Questions route
app.use('/sessions', sessionRoutes);  // Sessions route

const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not set in .env

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
