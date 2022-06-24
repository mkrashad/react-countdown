import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementBreak, incrementBreak } from '../slices/timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button
        id='break-increment'
        aria-label='Increment break'
        onClick={() => dispatch(incrementBreak())}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
};

export default BreakLength;
