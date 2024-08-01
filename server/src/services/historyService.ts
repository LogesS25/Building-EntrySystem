import Entry from '../models/entry';
import Exit from '../models/exit';

const getHistory = async (personId: string, startDate: Date, endDate: Date) => {
  const entries = await Entry.find({ personId, timestamp: { $gte: startDate, $lte: endDate } });
  const exits = await Exit.find({ personId, timestamp: { $gte: startDate, $lte: endDate } });
  return { entries, exits };
};

export default { getHistory };
