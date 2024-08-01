import ingressEgressTracker from "../models/ingressEgressTracker";

const getHistory = async (userId: string, startDate: Date, endDate: Date) => {
  const entries = await ingressEgressTracker.find({ userId, timestamp: { $gte: startDate, $lte: endDate } });
  const exits = await ingressEgressTracker.find({ userId, timestamp: { $gte: startDate, $lte: endDate } });
  return { entries, exits };
};

export default { getHistory };
