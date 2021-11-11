import { createSlice } from '@reduxjs/toolkit';

interface TimerState {
  breakLength: number;
  sessionLength: number;
  seconds: number;
  minutes: number;
  timerType: string;
  timerRunning: boolean;
}

const initialState: TimerState = {
  breakLength: 5,
  sessionLength: 25,
  seconds: 0,
  minutes: 25 * 60,
  timerType: 'Session',
  timerRunning: false,
};

export const timerSlice = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      state.breakLength =
        state.breakLength === 60 || state.timerRunning
          ? state.breakLength
          : state.breakLength + 1;
    },
    decrementBreak: (state) => {
      state.breakLength =
        state.breakLength <= 1 || state.timerRunning
          ? state.breakLength
          : state.breakLength - 1;
    },
    incrementSession: (state) => {
      state.sessionLength =
        state.sessionLength === 60 || state.timerRunning
          ? state.sessionLength
          : state.sessionLength + 1;
    },
    decrementSession: (state) => {
      state.sessionLength =
        state.sessionLength <= 1 || state.timerRunning
          ? state.sessionLength
          : state.sessionLength - 1;
    },
    decrementSeconds: (state) => {
      state.seconds = state.seconds > 0 ? state.seconds - 1 : 59;
    },
    switchSession: (state) => {
      state.timerType = 'Session';
      state.sessionLength =
        state.sessionLength > 0 ? state.sessionLength - 1 : state.sessionLength;
      state.minutes = state.sessionLength * 60;
    },
    switchBreak: (state) => {
      state.timerType = 'Break';
      state.breakLength =
        state.breakLength > 0 ? state.breakLength - 1 : state.breakLength;
      state.minutes = state.breakLength * 60;
    },
    startTimer: (state) => {
      state.timerRunning = true;
    },
    stopTimer: (state) => {
      state.timerRunning = false;
    },
    resetTimer: (state) => {
      state.breakLength = 5;
      state.sessionLength = 25;
      state.seconds = 0;
      state.minutes = 25 * 60;
      state.timerType = 'Session';
      state.timerRunning = false;
    },
  },
});

export const {
  decrementSeconds,
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  switchBreak,
  switchSession,
  startTimer,
  stopTimer,
  resetTimer,
} = timerSlice.actions;

export default timerSlice.reducer;
