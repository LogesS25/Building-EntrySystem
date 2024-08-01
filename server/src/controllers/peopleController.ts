import { Request, Response } from 'express';
import peopleService from '../services/peopleService';

export const getPeopleInside = async (req: Request, res: Response) => {
  try {
    const records = await peopleService.getLoggedInUsers();
    res.status(201).json(records);
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error:(error as Error).message });
  }
};
