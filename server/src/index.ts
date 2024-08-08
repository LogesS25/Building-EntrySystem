import express, {Express} from "express";
import mongoose from "mongoose";
import peopleRoutes from './routes/peopleRoutes';
import historyRoutes from './routes/historyRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import entryExitRoutes from './routes/ingressEgressRoutes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT ;
const mongoURI:string = process.env.URL || "";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error(err.message+"Failed to Connect to MongoDB"));

    app.use('/api', entryExitRoutes);
    app.use('/api', peopleRoutes);
    app.use('/api', historyRoutes);
    app.use('/api', analyticsRoutes);


app.listen(port,() => {
    console.log(`server Running on Port ${port}`);
});

