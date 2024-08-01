import { Request, Response } from 'express';
import persons from '../models/persons';

export const getPeopleInside = async (req: Request, res: Response) => {
  try {
    const entries = await persons.aggregate([
      {
        $lookup: {
          from: 'exits',
          localField: 'personId',
          foreignField: 'personId',
          as: 'exits'
        }
      },
      {
        $addFields: {
          lastExit: {
            $arrayElemAt: [
              {
                $filter: {
                  input: '$exits',
                  cond: { $gte: ['$timestamp', { $subtract: [new Date(), 24 * 60 * 60 * 1000] }] }
                }
              },
              -1
            ]
          }
        }
      },
      {
        $match: { lastExit: { $eq: null } }
      }
    ]);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve people inside' });
  }
};
