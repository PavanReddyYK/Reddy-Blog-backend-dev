import express from "express";

const app = express();

app.listen(3434, ()=>{
    console.log(`server running on http://localhost:3434`);
})