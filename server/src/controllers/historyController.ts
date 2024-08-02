import { Request, Response } from 'express';
import ingressEgressTracker from '../models/ingressEgressTracker';

export const getHistory = async (req: Request, res: Response) => {
  try {
    const { userId, startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Start date and end date are required' });
    }

    const start = new Date(startDate as string);
    const end = new Date(endDate as string);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ error: 'Invalid date format' });
    }

    const history = await ingressEgressTracker.find({
      userId,
      $or: [
        { entryTimestamp: { $gte: start, $lte: end } },
        { exitTimestamp: { $gte: start, $lte: end } }
      ]
    });

    res.status(200).json({ history });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};
