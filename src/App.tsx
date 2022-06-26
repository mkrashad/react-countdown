import React from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <div className='app-container'>
        <div className='break-session-container'>
          <SessionLength />
          <BreakLength />
        </div>
        <Timer />
      </div>
        <footer>
          <a href='https://github.com/rashad25evans' target='_blank' rel="noreferrer">
            Coded by Rashad Mahmudov
          </a>
        </footer>
    </>
  );
};

export default App;
