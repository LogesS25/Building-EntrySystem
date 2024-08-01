import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerEntry = (userId: string, entryGate: string) => {
  return axios.post(`${API_URL}/entry`, { userId, entryGate });
};

export const registerExit = (userId: string, exitGate: string) => {
  return axios.post(`${API_URL}/exit`, { userId, exitGate });
};

export const getPeople = () => {
  return axios.get(`${API_URL}/people`);
};

export const getHistory = (userId: string, startDate: string, endDate: string) => {
  return axios.get(`${API_URL}/history`, { params: { userId, startDate, endDate } });
};

export const getAnalytics = () => {
  return axios.get(`${API_URL}/analytics`);
};
