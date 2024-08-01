import React, { useEffect, useState } from 'react';
import { getAnalytics } from '../services/apiService';
import '../style/styles.css';

const Analytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await getAnalytics();
        setAnalytics(response.data);
      } catch (error) {
        alert('Error fetching analytics');
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <p>Number of people currently in the building: {analytics.currentCount}</p>
      <p>Average duration of stay: {analytics.averageDuration}</p>
      <p>Peak entry time: {analytics.peakEntryTime}</p>
      <p>Peak exit time: {analytics.peakExitTime}</p>
      <p>Most frequently used entry gate: {analytics.mostUsedEntryGate}</p>
      <p>Most frequently used exit gate: {analytics.mostUsedExitGate}</p>
    </div>
  );
};

export default Analytics;
