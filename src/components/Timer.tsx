import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { resetTimer } from '../slices/countSlice';

const Timer: React.FC = () => {
  // const sessionLenght = useSelector((state: RootState) => state.session.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div id='timer-label'>Session</div>
      {/* <div id='time-left'>{sessionLenght}:00</div> */}
      <button id='start_stop'>Start/Stop</button>
      <button id='reset' onClick={() => dispatch(resetTimer())}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
