import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

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
  return response;
};

export const getAnalytics = () => {
  return axios.get(`${API_URL}/analytics`);
};
