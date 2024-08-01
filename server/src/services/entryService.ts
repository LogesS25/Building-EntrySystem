import Entry from '../models/entry';

const registerEntry = async (personId: string, entryGate: string) => {
  const entry = new Entry({ personId, entryGate });
  return entry.save();
};

export default { registerEntry };
