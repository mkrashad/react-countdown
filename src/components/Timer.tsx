import React from 'react';

const Timer: React.FC = () => {
  return (
    <div>
      <div id='timer-label'>Session</div>
      <div id='time-left'>25:00</div>
      <button id='start_stop'>Start/Stop</button>
      <button id='reset'>Reset</button>
    </div>
  );
};

export default Timer;
