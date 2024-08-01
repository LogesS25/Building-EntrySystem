import Entry from '../models/entry';
import Exit from '../models/exit';

const getAnalytics = async () => {
  
  return {
    peopleCount: await Entry.countDocuments({}),
    averageStay: 0, 
    peakTimes: null, 
    gateUsage: [] 
  };
};

export default { getAnalytics };
