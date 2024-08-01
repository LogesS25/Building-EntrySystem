import mongoose, { Schema, Document } from 'mongoose';

interface IingressEgressTracker extends Document {
  userId: string;
  entryTimestamp: Date;
  exitTimestamp: Date;
  entryGateId: string;
  exitGateId: string;
  
}

const ingressEgressSchema: Schema = new Schema({
  userId: { type: String, required: true },
  entryTimestamp: { type: Date, default: null },
  exitTimestamp: { type: Date, default: null },
  entryGateId: { type: String, required: false },
  exitGateId: { type: String, required: false }
});

export default mongoose.model<IingressEgressTracker>('ingressEgressTracker', ingressEgressSchema);
