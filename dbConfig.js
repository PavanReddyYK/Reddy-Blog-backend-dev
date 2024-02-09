import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error: ",err));