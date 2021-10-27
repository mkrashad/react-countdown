import React, { useState } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { start_stop, reset } from '../slices/countSlice';

const Timer: React.FC = () => {
  const session = useSelector((state: RootState) => state.count.session);
  const breakTime = useSelector((state: RootState) => state.count.break);
  const seconds = useSelector((state: RootState) => state.count.seconds);

  const dispatch = useDispatch();
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const isRunning = intervalId != null;
  const startTimer = () => {
    if (isRunning) {
      window.clearInterval(intervalId);
      setIntervalId(null);
      // const value = e.target as HTMLElement;
      // if (value.innerText === 'Reset') dispatch(reset());
    } else {
      const newIntervalId = window.setInterval(
        () => dispatch(start_stop()),
        1000
      );
      setIntervalId(newIntervalId);
    }
  };
  const formatedMinutes = moment().minutes(session).format('mm');
  const formatedBreak = moment().minutes(breakTime).format('mm');
  const formatedSeconds = moment().seconds(seconds).format('ss');

  const resetTimer = () => {
    dispatch(reset());
    if (isRunning) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  return (
    <div>
      <div id='timer-label'>{session !== 0 ? 'Session' : 'Break'}</div>
      <div id='time-left'>
        {formatedMinutes !== '00' ? formatedMinutes : formatedBreak}:
        {formatedSeconds}
      </div>
      <button id='start_stop' onClick={startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button id='reset' onClick={resetTimer}>
        Reset
      </button>
      {/* <button id='reset' onClick={(e) => startTimer(e)}>
        Reset
      </button> */}
    </div>
  );
};

export default Timer;
