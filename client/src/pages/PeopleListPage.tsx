import React from 'react';
import '../style/styles.css';
import PeopleList from '../components/PeopleList';

const PeopleListPage: React.FC = () => {
  return (
    <div className="history-page">
      <PeopleList />
    </div>
  );
};

export default PeopleListPage;
