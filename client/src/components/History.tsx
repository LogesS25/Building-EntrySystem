import React, { useState } from 'react';
import { getHistory } from '../services/apiService';
import '../style/styles.css';

const History: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [history, setHistory] = useState<any[]>([]);

  
  const handleFetchHistory = async () => {
    try {
      const response = await getHistory(userId, startDate, endDate);
      setHistory(response.data);
      console.log(response.data);
    } catch (error) {
      alert('Error fetching history');
    }
  };

  return (
    <div className="history">
      <h2>Entry/Exit History</h2>
      <div>
        <label htmlFor="userId">Person ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button onClick={handleFetchHistory}>Fetch History</button>
      <ul>
        {history.map((record, index) => (
          <li key={index}>
            {record.userId} - {record.entryGate} - {record.entryTime} - {record.exitGate} - {record.exitTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
