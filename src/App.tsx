import React from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <BreakLength />
      <SessionLength />
      <Timer />
    </div>
  );
};

export default App;
