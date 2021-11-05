import React, { useState, useRef } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { start_stop, reset } from '../slices/timerSlice';

const Timer: React.FC = () => {
  const session = useSelector((state: RootState) => state.count.sessionLenght);
  const breakTime = useSelector((state: RootState) => state.count.breakLenght);
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

  const formatedMinutes: number | string =
    session < 10 ? '0' + session : session;
  const formatedBreak: number | string =
    breakTime < 10 ? '0' + breakTime : breakTime;
  const formatedSeconds: number | string =
    seconds < 10 ? '0' + seconds : seconds;

  formatedMinutes === '00' && audioRef?.current?.play();

  const resetTimer = () => {
    const sound: any = audioRef.current;
    sound?.pause();
    sound.currentTime = 0;
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
