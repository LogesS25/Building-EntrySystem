import { Request, Response } from 'express';
import ingressEgressTracker from '../models/ingressEgressTracker';

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const currentTime = new Date();

    // Number of people in the building
    const currentOccupancy = await ingressEgressTracker.countDocuments({
      exitTimestamp: { $eq: null }
    });

    // Average duration of stay
    const averageDurationResult = await ingressEgressTracker.aggregate([
      {
        $match: {
          exitTimestamp: { $ne: null },
        }
      },
      {
        $project: {
          duration: { $subtract: ["$exitTimestamp", "$entryTimestamp"] }
        }
      },
      {
        $group: {
          _id: null,
          avgDuration: { $avg: "$duration" }
        }
      }
    ]);

    const avgDurationMinutes = averageDurationResult.length > 0 ? averageDurationResult[0].avgDuration / (1000 * 60) : null;

    // Peak Entry/Exit Times
    const peakTimes = await ingressEgressTracker.aggregate([
      {
        $group: {
          _id: {
            entryHour: { $hour: "$entryTimestamp" },
            exitHour: { $hour: "$exitTimestamp" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 1
      }
    ]);

    const peakEntryHour = peakTimes.length > 0 ? peakTimes[0]._id.entryHour : null;
    const peakExitHour = peakTimes.length > 0 ? peakTimes[0]._id.exitHour : null;

    // Most Frequently Used Entry/Exit Gates
    const frequentGates = await ingressEgressTracker.aggregate([
      {
        $facet: {
          entryGates: [
            {
              $group: {
                _id: "$entryGateId",
                count: { $sum: 1 }
              }
            },
            {
              $sort: { count: -1 }
            },
            {
              $limit: 1
            }
          ],
          exitGates: [
            {
              $group: {
                _id: "$exitGateId",
                count: { $sum: 1 }
              }
            },
            {
              $sort: { count: -1 }
            },
            {
              $limit: 1
            }
          ]
        }
      }
    ]);

    const mostFrequentEntryGate = frequentGates[0].entryGates.length > 0 ? frequentGates[0].entryGates[0]._id : null;
    const mostFrequentExitGate = frequentGates[0].exitGates.length > 0 ? frequentGates[0].exitGates[0]._id : null;

    res.status(200).json({
      numPeopleInBuilding: currentOccupancy,
      avgDurationMinutes: avgDurationMinutes,
      peakEntryTime: peakEntryHour,
      peakExitTime: peakExitHour,
      frequentEntryGate: mostFrequentEntryGate,
      frequentExitGate: mostFrequentExitGate
    });
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error: (error as Error).message });
  }
};
