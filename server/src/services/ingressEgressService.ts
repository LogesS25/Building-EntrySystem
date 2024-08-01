import ingressEgressTracker from '../models/ingressEgressTracker';

const registerEntry = async (userId: string, entryGateId: string) => {

  const record = await ingressEgressTracker.find({
    userId,
    //timestamp: { $gte: new Date(startDate as string), $lte: new Date(endDate as string) }    
  }).sort({entryTimestamp:-1}).limit(1);  

  console.log(record);
  if(record.length==0){
    const entry = new ingressEgressTracker({ userId, entryGateId, entryTimestamp:new Date(), exitTimestamp:null });
    return entry.save();
  }
  else{
    if(record[0].exitTimestamp!=null){
      const entry = new ingressEgressTracker({ userId, entryGateId, entryTimestamp:new Date(), exitTimestamp:null });
      return entry.save();
    }
    else{
      throw new Error("Entry not allowed, User is still inside");
    }
  }  
};

const registerExit = async (userId: string, exitGateId: string) => {

  const record = await ingressEgressTracker.find({
    userId,
  }).sort({entryTimestamp:-1}).limit(1);

  if(record.length==0){
    throw new Error("Exit not allowed, No Entry found");
  }
  else{
    if(record[0].exitTimestamp==null){
      console.log(exitGateId);
       return ingressEgressTracker.updateOne(
        { _id: record[0]._id },
        {$set: { exitGateId, exitTimestamp:new Date()}}    
     )
    }
    else{
      throw new Error("Exit not allowed, User already exited");
    }
  }
};


export default { registerEntry, registerExit };
