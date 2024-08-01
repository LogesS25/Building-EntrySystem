import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  userId: string;
  name: string;
}

const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true }
});

export default mongoose.model<IUser>('Users', UserSchema);
