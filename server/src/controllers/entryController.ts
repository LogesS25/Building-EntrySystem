import { Request, Response } from 'express';
import entryService from '../services/entryService';


export const registerEntry = async (req: Request, res: Response) => {
  try {
    const { personId, entryGate } = req.body;
    const entry = await entryService.registerEntry(personId, entryGate);
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register entry' });
  }
};
