import React from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <div className='break-session-container'>
        <SessionLength />
        <BreakLength />
      </div>
      <Timer />
    </div>
  );
};

export default App;
