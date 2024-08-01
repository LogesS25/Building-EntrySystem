import { Request, Response } from 'express';
import exitService from '../services/exitService';

export const registerExit = async (req: Request, res: Response) => {
  try {
    const { personId, exitGate } = req.body;
    const exit = await exitService.registerExit(personId, exitGate);
    res.status(201).json(exit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register exit' });
  }
};
