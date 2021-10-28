import React, { useState, useRef } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { start_stop, reset } from '../slices/countSlice';

const Timer: React.FC = () => {
  const session = useSelector((state: RootState) => state.count.session);
  const breakTime = useSelector((state: RootState) => state.count.break);
  const seconds = useSelector((state: RootState) => state.count.seconds);

  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useDispatch();
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const isRunning = intervalId != null;
  const startTimer = () => {
    if (isRunning) {
      window.clearInterval(intervalId);
      setIntervalId(null);
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

  formatedMinutes === '00' && audioRef.current?.play();
  
  const resetTimer = () => {
    const sound = audioRef.current;
    sound?.pause();
    let currentTime: number | undefined = sound?.currentTime;
    currentTime = 0;
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
      <audio
        preload='auto'
        ref={audioRef}
        id='beep'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      />
    </div>
  );
};

export default Timer;
