import React, { useState, useEffect } from 'react';
import { getHistory } from '../services/apiService';
import '../style/styles.css';

const History: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [fetching, setFetching] = useState(false);

  const handleFetchHistory = async () => {
    setFetching(true);
    try {
      const response = await getHistory(userId, startDate, endDate);
      console.log('Full API Response:', response);
      console.log('API Response Data:', response.data);

      if (Array.isArray(response.data.history) && Array.isArray(response.data.history)) {
        const combinedHistory = [...response.data.history, ...response.data.history];
        setHistory(combinedHistory);
      } else {
        console.error('Invalid data format received from the server:', response.data);
        setHistory([]);
      }
    } catch (error) {
      console.error('Error fetching history:', error);
      alert('Error fetching history');
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    console.log('History State Updated:', history);
  }, [history]);

  return (
    <div className="form-container">
      <h2>Entry/Exit History</h2>
      <div className="form-group">
        <label htmlFor="userId">User ID:</label>
        <input
          className='input'
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          className='input'
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          className='input'
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button className="entry-form-button" onClick={handleFetchHistory} disabled={fetching}>
        {fetching ? 'Fetching...' : 'Fetch History'}
      </button>
      {history.length > 0 ? (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Entry Gate</th>
                <th>Entry Timestamp</th>
                <th>Exit Gate</th>
                <th>Exit Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {history.map((record, index) => (
                <tr key={index}>
                  <td>{record.userId}</td>
                  <td>{record.entryGateId}</td>
                  <td>{record.entryTimestamp}</td>
                  <td>{record.exitGateId}</td>
                  <td>{record.exitTimestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Entry Gate</th>
                <th>Entry Timestamp</th>
                <th>Exit Gate</th>
                <th>Exit Timestamp</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>No History found</td>
                  <td>No History found</td>
                  <td>No History found</td>
                  <td>No History found</td>
                  <td>No History found</td>
                </tr>              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
