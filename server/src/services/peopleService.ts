//import Person from '../models/person';
import persons from "../models/persons";

const getPeopleInside = async () => {
  return persons.find(); // Simplified, adjust based on actual logic
};

export default { getPeopleInside };
