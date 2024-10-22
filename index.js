import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});