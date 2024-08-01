import ingressEgressTracker from "../models/ingressEgressTracker";

const getLoggedInUsers = async () => {
  return ingressEgressTracker.find({ exitTimestamp : { $eq : null } },{ '_id':0,'userId': 1});
};

export default { getLoggedInUsers };
