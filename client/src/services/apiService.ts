import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const registerEntry = (userId: string, entryGateId: string) => {
  return axios.post(`${API_URL}/entry`, { userId, entryGateId });
};

export const registerExit = (userId: string, exitGateId: string) => {
  return axios.post(`${API_URL}/exit`, { userId, exitGateId });
};

export const getPeople = () => {
  return axios.get(`${API_URL}/people`);
};

export const getHistory = (userId: string, startDate: string, endDate: string) => {
  const response =  axios.get(`${API_URL}/history`, { params: { userId, startDate, endDate } });
  console.log('API response:', response);
  return response;};



  export const getAnalytics = async () => {
    try {
      const response = await axios.get(`${API_URL}/analytics`); // Ensure this matches your backend route
      return response.data;
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw error; // Rethrow the error to be caught in the component
    }
  };

