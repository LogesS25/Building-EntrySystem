import React, { useState } from 'react';
import { registerExit } from '../services/apiService';
import '../style/styles.css';

const ExitForm: React.FC = () => {
  const [personId, setPersonId] = useState('');
  const [exitGate, setExitGate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerExit(personId, exitGate);
      alert('Exit recorded successfully');
      setPersonId('');
      setExitGate('');
    } catch (error) {
      alert('Error recording exit');
    }
  };

  return (
    <div className="form-container">
      <h2>Register Exit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="personId">Person ID:</label>
          <input
            type="text"
            id="personId"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="exitGate">Exit Gate:</label>
          <input
            type="text"
            id="exitGate"
            value={exitGate}
            onChange={(e) => setExitGate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExitForm;
