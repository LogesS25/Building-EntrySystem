import { Schema, model, Document } from 'mongoose';


interface IEntryExit extends Document {
  personId: string;
  entryGate: string;
  exitGate?: string; //optional
  entryTime: Date;
  exitTime?: Date; // Optional
}


const entryExitSchema = new Schema<IEntryExit>({
  personId: {
    type: String,
    required: true,
  },
  entryGate: {
    type: String,
    required: true,
  },
  exitGate: {
    type: String,
    default: null,
  },
  entryTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  exitTime: {
    type: Date,
    default: null,
  },
});

const EntryExit = model<IEntryExit>('EntryExit', entryExitSchema);

export default EntryExit;
