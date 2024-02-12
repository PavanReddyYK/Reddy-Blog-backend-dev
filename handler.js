import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./src/routes/auth.route.js";
import userRoutes from "./src/routes/user.route.js";

import "./dbConfig.js";
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(process.env.PORT || 3434, () => {
  console.log(`server running on http://localhost:3434`);
});