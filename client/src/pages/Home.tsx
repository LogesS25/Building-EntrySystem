import React from 'react';
import EntryForm from '../components/EntryForm';
import ExitForm from '../components/ExitForm';
import PeopleList from '../components/PeopleList';
import '../style/styles.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <EntryForm />
      <ExitForm />
      <PeopleList />
    </div>
  );
};

export default Home;
