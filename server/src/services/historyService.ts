import ingressEgressTracker from "../models/ingressEgressTracker";
import { Request, Response } from 'express';


const getHistory = async ( startDate: Date, endDate: Date,userId?: string) => {
  try {
    const history = await ingressEgressTracker.find({
      userId,
      $or: [
        { entryTimestamp: { $gte: startDate, $lte: endDate } },
        { exitTimestamp: { $gte: startDate, $lte: endDate } }
      ]    
    });
    return history ;
  } catch (error) {
    console.error('Error fetching history:', error);
    //res.status(500).json({ error: 'Failed to retrieve history' });
  }
};

export default { getHistory };
