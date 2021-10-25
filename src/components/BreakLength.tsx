import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/breakSlice';

const BreakLength: React.FC = () => {
  const count = useSelector((state: RootState) => state.break.value);
  const dispatch = useDispatch();
  return (
    <>
      <div id='break-label'>Break Length</div>
      <div id='break-length'>{count}</div>
      <button
        id='break-decrement'
        aria-label='Decrement break'
        onClick={() => dispatch(decrement())}
      >
        Break Decrement
      </button>
      <button
        id='break-increment'
        aria-label='Increment break'
        onClick={() => dispatch(increment())}
      >
        Break Increment
      </button>
    </>
  );
};

export default BreakLength;
