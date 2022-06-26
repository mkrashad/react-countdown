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
} from '../slices/timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStop,
  faArrowLeftRotate,
} from '@fortawesome/free-solid-svg-icons';
import './styles/timer.scss';

const Timer: React.FC = () => {
  const dispatch = useDispatch();

  const timerSlice = useSelector((state: RootState) => state.countdown);

  const audioRef = useRef<HTMLAudioElement>(null);

  timerSlice.sessionLength === 0 && audioRef?.current?.play();

  const minutes: number = timerSlice.minutes;
  const seconds: number = timerSlice.seconds;

  useEffect(() => {
    let countdown: any;
    if (timerSlice.timerRunning && timerSlice.seconds > 0) {
      countdown = window.setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    } else if (timerSlice.timerRunning && timerSlice.seconds === 0) {
      countdown = setInterval(() => {
        dispatch(switchSession());
        dispatch(decrementSeconds());
        if (timerSlice.sessionLength === 0) {
          dispatch(switchBreak());
        }
        if (timerSlice.breakLength === 0) {
          dispatch(switchSession());
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [dispatch, timerSlice]);

  const handleReset = () => {
    dispatch(resetTimer());
    const sound: any = audioRef.current;
    sound?.pause();
    sound.currentTime = 0;
  };

  return (
    <div>
      <div id='timer-label'>{timerSlice.timerType}</div>
      <div id='time-left'>
        {minutes < 10 ? '0' + minutes : timerSlice.sessionLength}:
        {seconds < 10 ? '0' + seconds : seconds}
      </div>
      <button
        id='start_stop'
        className='start_stop'
        onClick={
          timerSlice.timerRunning
            ? () => dispatch(stopTimer())
            : () => dispatch(startTimer())
        }
      >
        {timerSlice.timerRunning ? (
          <FontAwesomeIcon icon={faStop} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </button>
      <button id='reset' className='reset' onClick={handleReset}>
        <FontAwesomeIcon icon={faArrowLeftRotate} />
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
