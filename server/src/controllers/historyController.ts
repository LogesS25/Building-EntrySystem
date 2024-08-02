import { Request, Response } from 'express';
import historyService from '../services/historyService';

export const getHistory = async (req: Request, res: Response) => { 
    
    const { startDate,endDate,userId } = req.query;

    const user = userId as string;

    console.log(user,startDate,endDate);


    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Start date and end date are required' });
    }

    const start = new Date(startDate as string);
    const end = new Date(endDate as string);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
    //const records = await historyService.getHistory(userId, startDate,endDate);

     try{
       const records = await historyService.getHistory(start,end,user);
       res.status(201).json(records);
     } catch (error) {
       console.log((error as Error).message);
       res.status(500).json({ error:(error as Error).message });
     }
  };



 
