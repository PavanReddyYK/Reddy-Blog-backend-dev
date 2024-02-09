import express from "express";
import dotenv from "dotenv";

dotenv.config();

import './dbConfig.js'
const app = express();

app.listen(3434, ()=>{
    console.log(`server running on http://localhost:3434`);
})