import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementSession, incrementSession } from '../slices/timerSlice';

const SessionLength: React.FC = () => {
  const sessionLenght = useSelector((state: RootState) => state.count.sessionLenght);
  const dispatch = useDispatch();
  return (
    <>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>{sessionLenght}</div>
      <button
        id='session-decrement'
        aria-label='Decrement session'
        onClick={() => dispatch(decrementSession())}
      >
        session Decrement
      </button>
      <button
        id='session-increment'
        aria-label='Increment session'
        onClick={() => dispatch(incrementSession())}
      >
        session Increment
      </button>
    </>
  );
};

export default SessionLength;
