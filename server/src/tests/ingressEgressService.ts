import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import ingressEgressService from '../../src/services/ingressEgressService';
import ingressEgressTracker from '../../src/models/ingressEgressTracker';

describe('IngressEgressService', () => {
  let mongoServer: MongoMemoryServer;

  

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await ingressEgressTracker.deleteMany({});
  });

  test('should register an entry successfully', async () => {
    const userId = 'testUser';
    const entryGateId = 'A1';
    const entry = await ingressEgressService.registerEntry(userId, entryGateId);
    expect(entry).toHaveProperty('userId', userId);
    expect(entry).toHaveProperty('entryGateId', entryGateId);
    expect(entry).toHaveProperty('entryTimestamp');
    expect(entry.exitTimestamp).toBeNull();
  });

  test('should register an exit successfully', async () => {
    const userId = 'testUser';
    const entryGateId = 'A1';
    const exitGateId = 'B1';
    await ingressEgressService.registerEntry(userId, entryGateId);
    const result = await ingressEgressService.registerExit(userId, exitGateId);
    expect(result.modifiedCount).toBe(1); // Updated to use modifiedCount
    const record = await ingressEgressTracker.findOne({ userId });
    expect(record).toHaveProperty('exitGateId', exitGateId);
    expect(record).toHaveProperty('exitTimestamp');
  });

  test('should throw an error if no entry is found for exit', async () => {
    const userId = 'testUser';
    const exitGateId = 'B1';
    await expect(ingressEgressService.registerExit(userId, exitGateId)).rejects.toThrow('Exit not allowed, No Entry found');
  });
});
