import React, { useState } from 'react';
import { registerEntry } from '../services/apiService';
import '../style/styles.css';

const EntryForm: React.FC = () => {
  const [personId, setPersonId] = useState('');
  const [entryGate, setEntryGate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerEntry(personId, entryGate);
      alert('Entry recorded successfully');
      setPersonId('');
      setEntryGate('');
    } catch (error) {
      alert('Error recording entry');
    }
  };

  return (
    <div className="form-container">
      <h2>Register Entry</h2>
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
          <label htmlFor="entryGate">Entry Gate:</label>
          <input
            type="text"
            id="entryGate"
            value={entryGate}
            onChange={(e) => setEntryGate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
