import Exit from '../models/exit';

const registerExit = async (personId: string, exitGate: string) => {
  const exit = new Exit({ personId, exitGate });
  return exit.save();
};

export default { registerExit };
