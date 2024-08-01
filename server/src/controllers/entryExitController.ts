import { Request, Response } from 'express';
import { addEntry, addExit } from '../services/entryExitService';


export const createEntry = async (req: Request, res: Response) => {
  try {
    const { personId, entryGate } = req.body;
    const newEntry = await addEntry(personId, entryGate);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'error in createEntry function @entryExitController'});
  }
};


export const createExit = async (req: Request, res: Response) => {
  try {
    const { personId, exitGate } = req.body;
    const updatedEntry = await addExit(personId, exitGate);
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(500).json({ error: 'error in createExit function @entryExitController' });
  }
};
