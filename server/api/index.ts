import express, {Express} from "express";
import mongoose from "mongoose";
import peopleRoutes from '../src/routes/peopleRoutes';
import historyRoutes from '../src/routes/historyRoutes';
import analyticsRoutes from '../src/routes/analyticsRoutes';
import entryExitRoutes from '../src/routes/ingressEgressRoutes';
import cors from 'cors';


const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;


const mongoURI: string = "mongodb+srv://sivalog25:v4hkvFJx4KOf56D2@entryexit.0vp2elc.mongodb.net/?retryWrites=true&w=majority&appName=entryexit";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error(err.message+"Failed to Connect to MongoDB"));




    app.use('/api', entryExitRoutes);
    app.use('/api', peopleRoutes);
    app.use('/api', historyRoutes);
    app.use('/api', analyticsRoutes);
    app.use('/api', entryExitRoutes);


app.listen(port,() => {
    console.log(`server Running on Port ${port}`);
});

