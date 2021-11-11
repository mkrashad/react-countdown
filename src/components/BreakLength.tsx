import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementBreak, incrementBreak } from '../slices/timerSlice';

const BreakLength: React.FC = () => {
  const breakLength = useSelector(
    (state: RootState) => state.countdown.breakLength
  );
  const dispatch = useDispatch();
  return (
    <>
      <div id='break-label'>Break Length</div>
      <div id='break-length'>{breakLength}</div>
      <button
        id='break-decrement'
        aria-label='Decrement break'
        onClick={() => dispatch(decrementBreak())}
      >
        Break Decrement
      </button>
      <button
        id='break-increment'
        aria-label='Increment break'
        onClick={() => dispatch(incrementBreak())}
      >
        Break Increment
      </button>
    </>
  );
};

export default BreakLength;
