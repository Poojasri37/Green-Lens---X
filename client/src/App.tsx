import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CarbonRadar from './pages/CarbonRadar';
import PrecisionLab from './pages/PrecisionLab';
import CarbonDiff from './pages/CarbonDiff';
import AICoach from './pages/AICoach';
import GreenScore from './pages/GreenScore';
import RepoConnect from './pages/RepoConnect';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<CarbonRadar />} />
            <Route path="/precision" element={<PrecisionLab />} />
            <Route path="/diff" element={<CarbonDiff />} />
            <Route path="/coach" element={<AICoach />} />
            <Route path="/score" element={<GreenScore />} />
            <Route path="/repo" element={<RepoConnect />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
