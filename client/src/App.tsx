import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import './style/styles.css';
import HistoryPage from './pages/HistoryPage';
import AnalyticsPage from './pages/AnalyticsPage';
import PeopleList from './components/PeopleList';

import "./index.css"

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/people" element={<PeopleList/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/analytics" element={<AnalyticsPage/>} />
        </Routes>
      </div>
    </Router> 
  );
};

export default App;
