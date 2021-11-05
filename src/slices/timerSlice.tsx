import { createSlice } from '@reduxjs/toolkit';

export interface TimerState {
  breakLenght: number;
  sessionLenght: number;
  seconds: number;
  timerType: string;
}

const initialState: TimerState = {
  breakLenght: 5,
  sessionLenght: 25,
  seconds: 60,
  timerType: 'Session',
};

export const timerSlice = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      state.breakLenght =
        state.breakLenght === 60 ? state.breakLenght : state.breakLenght + 1;
    },
    decrementBreak: (state) => {
      state.breakLenght =
        state.breakLenght <= 1 ? state.breakLenght : state.breakLenght - 1;
    },
    incrementSession: (state) => {
      state.sessionLenght =
        state.sessionLenght === 60
          ? state.sessionLenght
          : state.sessionLenght + 1;
    },
    decrementSession: (state) => {
      state.sessionLenght =
        state.sessionLenght <= 1
          ? state.sessionLenght
          : state.sessionLenght - 1;
    },
    start_stop: (state) => {
      state.seconds = state.seconds > 0 ? state.seconds - 1 : 5;
      state.sessionLenght =
        state.seconds < 1 && state.sessionLenght !== 0
          ? state.sessionLenght - 1
          : state.sessionLenght;
      state.breakLenght =
        state.seconds < 1 &&
        state.sessionLenght === 0 &&
        state.breakLenght !== 0
          ? state.breakLenght - 1
          : state.sessionLenght === 0
          ? 1
          : state.breakLenght;
    },
    reset: (state) => {
      state.breakLenght = 5;
      state.sessionLenght = 25;
      state.seconds = 0;
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  start_stop,
  reset,
} = timerSlice.actions;

export default timerSlice.reducer;
