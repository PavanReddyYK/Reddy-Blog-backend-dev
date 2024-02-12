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