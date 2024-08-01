import mongoose, { Schema, Document } from 'mongoose';

interface IEntry extends Document {
  personId: string;
  timestamp: Date;
  entryGate: string;
}

const EntrySchema: Schema = new Schema({
  personId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  entryGate: { type: String, required: true }
});

export default mongoose.model<IEntry>('Entry', EntrySchema);
