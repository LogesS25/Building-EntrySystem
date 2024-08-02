import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sivalog25:v4hkvFJx4KOf56D2@entryexit.0vp2elc.mongodb.net/?retryWrites=true&w=majority&appName=entryexit', {
    // No need to specify useNewUrlParser and useUnifiedTopology
    // These options are the default behavior in newer versions of Mongoose
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
