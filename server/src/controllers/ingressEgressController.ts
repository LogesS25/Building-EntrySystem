import { Request, Response } from 'express';
import ingressEgressService from '../services/ingressEgressService';


export const registerEntry = async (req: Request, res: Response) => {
  try {
    const { userId, entryGateId } = req.body;
    const entry = await ingressEgressService.registerEntry(userId, entryGateId);
    res.status(201).json(entry);
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error:(error as Error).message });
  }
};

export const registerExit = async (req: Request, res: Response) => {
  try {
    const { userId, exitGateId } = req.body;
    const exit = await ingressEgressService.registerExit(userId, exitGateId);
    res.status(201).json(exit);
  } catch (error) {
    res.status(500).json({ error:(error as Error).message });
  }
};


