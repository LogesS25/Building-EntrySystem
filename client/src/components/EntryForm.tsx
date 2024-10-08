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
        <div className='form-field'>
          <label htmlFor="personId">Person ID:</label>
          <input
            type="text"
            id="personId"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
            required
            className='input'
          />
        </div>
        <div>
          <label htmlFor="entryGateId">Entry Gate:</label>
          <input
            type="text"
            id="entryGateId"
            value={entryGate}
            onChange={(e) => setEntryGate(e.target.value)}
            required
            className='input'

          />
        </div>
        <button className="entry-form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
