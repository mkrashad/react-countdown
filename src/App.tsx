import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div id='break-label'>Break Length</div>
      <div id='session-label'>Session Length</div>
      <button id='break-decrement'>Break Decrement</button>
      <button id='session-decrement'>Session Decrement</button>
      <button id='break-increment'>Break Increment</button>
      <button id='session-increment'>Session Increment</button>
      <div id='break-length'>5</div>
      <div id='session-length'>25</div>
      <div id='timer-label'>Session</div>
      <button id='start_stop'>Start/Stop</button>
      <button id='reset'>Reset</button>
    </div>
  );
};

export default App;
