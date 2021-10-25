import React from 'react';

const SessionLength: React.FC = () => {
  return (
    <div>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>25</div>
      <button id='session-decrement'>Session Decrement</button>
      <button id='session-increment'>Session Increment</button>
    </div>
  );
};

export default SessionLength;
