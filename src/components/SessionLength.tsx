import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementSession, incrementSession } from '../slices/timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles/sessionLength.scss';

const SessionLength: React.FC = () => {
  const sessionLength = useSelector(
    (state: RootState) => state.countdown.sessionLength
  );
  const dispatch = useDispatch();
  return (
    <div className='session-column'>
      <div id='session-label' className='session-label'>
        Session Length
      </div>
      <div className='session-container'>
        <button
          id='session-decrement'
          className='session-decrement'
          aria-label='Decrement session'
          onClick={() => dispatch(decrementSession())}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <div id='session-length' className='session-length'>
          {sessionLength}
        </div>
        <button
          id='session-increment'
          className='session-increment'
          aria-label='Increment session'
          onClick={() => dispatch(incrementSession())}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default SessionLength;
