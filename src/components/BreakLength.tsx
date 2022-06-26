import React from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementBreak, incrementBreak } from '../slices/timerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles/breakLength.scss';

const BreakLength: React.FC = () => {
  const breakLength = useSelector(
    (state: RootState) => state.countdown.breakLength
  );
  const dispatch = useDispatch();
  return (
      <div className='break-column'>
        <div id='break-label' className='break-label'>
          Break Length
        </div>
        <div className='break-container'>
          <button
            id='break-decrement'
            className='break-decrement'
            aria-label='Decrement break'
            onClick={() => dispatch(decrementBreak())}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div id='break-length' className='break-length'>
            {breakLength}
          </div>
          <button
            id='break-increment'
            className='break-increment'
            aria-label='Increment break'
            onClick={() => dispatch(incrementBreak())}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
  );
};

export default BreakLength;
