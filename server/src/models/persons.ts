import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
  personId: string;
  name: string;
}

const PersonSchema: Schema = new Schema({
  personId: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

export default mongoose.model<IPerson>('Person', PersonSchema);
