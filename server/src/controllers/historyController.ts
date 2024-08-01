import { Request, Response } from 'express';
import Entry from '../models/entry';
import Exit from '../models/exit';

export const getHistory = async (req: Request, res: Response) => {
  try {
    const { personId, startDate, endDate } = req.query;
    const entries = await Entry.find({
      personId,
      timestamp: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) }
    });
    const exits = await Exit.find({
      personId,
      timestamp: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) }
    });
    res.status(200).json({ entries, exits });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve history' });
  }
};
