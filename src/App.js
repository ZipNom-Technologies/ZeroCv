
import React, { useState } from 'react';
import EmployerDashboard from './components/EmployerDashboard';
import CandidatePortal from './components/CandidatePortal';
import AIInterviewBot from './components/AIInterviewBot';
import ZeroScoreEngine from './components/ZeroScoreEngine';
import BlindMode from './components/BlindMode';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [view, setView] = useState('employer');

  const dummyCandidates = [
    { name: 'Alice Kumar', email: 'alice@example.com', score: 82 },
    { name: 'Bob Patel', email: 'bob@example.com', score: 76 },
    { name: 'Carol Singh', email: 'carol@example.com', score: 91 }
  ];

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setView('employer')}>Employer</button>
        <button onClick={() => setView('candidate')}>Candidate</button>
        <button onClick={() => setView('ai')}>AI Interview</button>
        <button onClick={() => setView('score')}>ZeroScore</button>
        <button onClick={() => setView('blind')}>Blind Mode</button>
        <button onClick={() => setView('admin')}>Admin</button>
      </nav>
      {view === 'employer' && <EmployerDashboard />}
      {view === 'candidate' && <CandidatePortal />}
      {view === 'ai' && <AIInterviewBot />}
      {view === 'score' && <ZeroScoreEngine simulationScore={75} aiScore={85} timeTaken={20} />}
      {view === 'blind' && <BlindMode candidates={dummyCandidates} />}
      {view === 'admin' && <AdminPanel />}
    </div>
  );
}
