import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from './src/routes/auth.route.js';
import authRoutes from './src/routes/user.route.js';

import './dbConfig.js'
const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });