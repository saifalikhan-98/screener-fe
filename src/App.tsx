import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<LandingPage />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
