import React from 'react';
import { Link } from 'react-router-dom';
import '../style/styles.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
