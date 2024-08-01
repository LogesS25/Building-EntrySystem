import React, { useEffect, useState } from 'react';
import { getPeople } from '../services/apiService';
import '../style/styles.css';

const PeopleList: React.FC = () => {
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await getPeople();
        setPeople(response.data);
        //console.log(response.data);
      } catch (error) {
        alert('Error fetching people');
      }
    };

    fetchPeople();
  }, []);

  return (
    <div className="people-list">
      <h2>People Currently Inside</h2>
      <ul>
        {people.map((user, index) => (
          <li key={index}>{user.userId}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
