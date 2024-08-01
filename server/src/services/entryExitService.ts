import EntryExit from '../models/entryExit';


export const addEntry = async (personId: string, entryGate: string) => {
  try {
    const newEntry = new EntryExit({
      personId,
      entryGate,
      entryTime: new Date(),
    });

    await newEntry.save();
    console.log('Entry recorded successfully');
    return newEntry;
  } catch (error) {
    console.error('Error recording entry:', error);
    throw new Error('Failed to record entry');
  }
};


export const addExit = async (personId: string, exitGate: string) => {
  try {
    const entry = await EntryExit.findOne({ personId, exitTime: { $exists: false } });
    if (entry) {
      entry.exitGate = exitGate;
      entry.exitTime = new Date();
      await entry.save();
      console.log('Exit recorded successfully');
      return entry;
    } else {
      console.log('No entry found for this person');
      throw new Error('No matching entry found');
    }
  } catch (error) {
    console.error('Error recording exit:', error);
    throw new Error('Failed to record exit');
  }
};
