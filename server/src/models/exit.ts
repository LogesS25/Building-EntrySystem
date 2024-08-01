import mongoose, { Schema, Document } from 'mongoose';

interface IExit extends Document {
  personId: string;
  timestamp: Date;
  exitGate: string;
}

const ExitSchema: Schema = new Schema({
  personId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  exitGate: { type: String, required: true }
});

export default mongoose.model<IExit>('Exit', ExitSchema);
