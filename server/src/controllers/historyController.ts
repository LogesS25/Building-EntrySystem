import { Request, Response } from 'express';
import ingressEgressTracker from '../models/ingressEgressTracker';


export const getHistory = async (req: Request, res: Response) => {
  try {    
    const { userId, startDate, endDate } = req.query;
    const entries = await ingressEgressTracker.find({
      userId,
      exitTimestamp: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) }
    });
    const exits = await ingressEgressTracker.find({
      userId,
      exitTimestamp: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) }
    });
    res.status(200).json({ entries, exits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};
