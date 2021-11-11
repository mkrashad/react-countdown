import React, { useRef, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {
  startTimer,
  stopTimer,
  resetTimer,
  decrementSeconds,
  switchBreak,
  switchSession,
  setTimer,
} from '../slices/timerSlice';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const sessionTime = useSelector(
    (state: RootState) => state.countdown.sessionLength
  );
  const breakTime = useSelector(
    (state: RootState) => state.countdown.breakLength
  );

  const seconds = useSelector((state: RootState) => state.countdown.seconds);
  const timerRunning = useSelector(
    (state: RootState) => state.countdown.timerRunning
  );
  const timerType = useSelector(
    (state: RootState) => state.countdown.timerType
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatedMinutes: number | string =
    sessionTime < 10 ? '0' + sessionTime : sessionTime;
  const formatedBreak: number | string =
    breakTime < 10 ? '0' + breakTime : breakTime;
  const formatedSeconds: number | string =
    seconds < 10 ? '0' + seconds : seconds;

  formatedMinutes === '00' && audioRef?.current?.play();

  useEffect(() => {
    let countdown: any = null;
    if (timerRunning && seconds > 0) {
      countdown = window.setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    } else if (timerRunning && seconds === 0) {
      countdown = setInterval(() => {
        dispatch(switchSession());
        dispatch(decrementSeconds());
        if (sessionTime === 0) {
          dispatch(switchBreak());
        }
        if (breakTime === 0) {
          dispatch(switchSession());
        }
        if (sessionTime === 0 && breakTime === 0) {
          dispatch(setTimer());
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [dispatch, timerRunning, timerType, seconds, breakTime, sessionTime]);

  const handleReset = () => {
    dispatch(resetTimer());
    const sound: any = audioRef.current;
    sound?.pause();
    sound.currentTime = 0;
  };

  return (
    <div>
      <div id='timer-label'>
        {sessionTime !== 0 && seconds !== 0 ? 'Session' : 'Break'}
      </div>
      <div id='time-left'>
        {formatedMinutes !== '00' ? formatedMinutes : formatedBreak}:
        {formatedSeconds}
      </div>
      <button
        id='start_stop'
        onClick={
          timerRunning
            ? () => dispatch(stopTimer())
            : () => dispatch(startTimer())
        }
      >
        {timerRunning ? 'Stop' : 'Start'}
      </button>
      <button id='reset' onClick={handleReset}>
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
