import { Request, Response } from 'express';
import ingressEgress from '../models/ingressEgressTracker';


export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const [peopleCount, averageStay, peakTimes, gateUsage] = await Promise.all([
      ingressEgress.countDocuments({ timestamp: { $gte: new Date(now.setHours(0, 0, 0, 0)) } }),
      ingressEgress.aggregate([
        { $lookup: { from: 'exits', localField: 'personId', foreignField: 'personId', as: 'exits' } },
        { $addFields: { duration: { $subtract: [{ $arrayElemAt: ['$exits.timestamp', 0] }, '$timestamp'] } } },
        { $group: { _id: null, averageDuration: { $avg: '$duration' } } }
      ]),
      ingressEgress.aggregate([
        { $group: { _id: { $hour: '$timestamp' }, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 }
      ]),
      ingressEgress.aggregate([
        { $group: { _id: '$entryGate', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ])
    ]);

    res.status(200).json({
      peopleCount,
      averageStay: averageStay[0]?.averageDuration || 0,
      peakTimes: peakTimes[0]?._id || null,
      gateUsage: gateUsage
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve analytics' });
  }
};
