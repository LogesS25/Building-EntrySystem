import express, {Express} from "express";

import mongoose from "mongoose";

const app: Express = express();

const port = process.env.PORT || 5000;

app.use(express.json());

const mongoURI: string = "mongodb+srv://sivalog25:v4hkvFJx4KOf56D2@entryexit.0vp2elc.mongodb.net/?retryWrites=true&w=majority&appName=entryexit";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB"));

app.listen(port,() => {
    console.log(`server Running on Port ${port}`);
});

