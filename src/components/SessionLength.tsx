import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/sessionSlice';

const SessionLength: React.FC = () => {
  const count = useSelector((state: RootState) => state.session.value);
  const dispatch = useDispatch();
  return (
    <>
      <div id='session-label'>Session Length</div>
      <div id='session-length'>{count}</div>
      <button
        id='session-decrement'
        aria-label='Decrement session'
        onClick={() => dispatch(decrement())}
      >
        Session Decrement
      </button>
      <button
        id='session-increment'
        aria-label='Increment session'
        onClick={() => dispatch(increment())}
      >
        Session Increment
      </button>
    </>
  );
};

export default SessionLength;
