import React, { useEffect, useState } from 'react';
import { getAnalytics } from '../services/apiService';
import '../style/styles.css';

const Analytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<any | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalytics();
        console.log('Fetched Analytics:', data); // Log the fetched data
        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
        alert('Error fetching analytics');
      }
    };
  
    fetchAnalytics();
  }, []);

  if (!analytics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="table-container">
      <h2>User Entry/Exit Analytics</h2>
      {analytics && (
        <table className="table">
          <thead>
            <tr>
              <th>Number of People in Building</th>
              <th>Average Duration of Stay (minutes)</th>
              <th>Peak Entry Time</th>
              <th>Peak Exit Time</th>
              <th>Most Frequently Used Entry Gate</th>
              <th>Most Frequently Used Exit Gate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{analytics.numPeopleInBuilding ?? 'N/A'}</td>
              <td>{analytics.avgDurationMinutes !== undefined ? analytics.avgDurationMinutes.toFixed(2) : 'N/A'}</td>
              <td>{analytics.peakEntryTime !== undefined ? `${analytics.peakEntryTime}:00` : 'N/A'}</td>
              <td>{analytics.peakExitTime !== undefined ? `${analytics.peakExitTime}:00` : 'N/A'}</td>
              <td>{analytics.frequentEntryGate || 'N/A'}</td>
              <td>{analytics.frequentExitGate || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Analytics;
