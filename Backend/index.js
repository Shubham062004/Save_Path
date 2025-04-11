import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// const mongoose = require('mongoose');


// Import routes
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import financeRoutes from './routes/finances.js';
import simulationRoutes from './routes/simulations.js';
import behaviorRoutes from './routes/behaviors.js';
import decisionRoutes from './routes/decisions.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/finances', financeRoutes);
app.use('/api/simulations', simulationRoutes);
app.use('/api/behaviors', behaviorRoutes);
app.use('/api/decisions', decisionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.get('/', (req, res) => {
    return res.send("It's working 🙌")
  })

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
