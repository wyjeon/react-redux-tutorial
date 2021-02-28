import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { number: 0 },
  reducers: {
    increment: state => ({ number: state.number + 1 }),
    decrement: state => ({ number: state.number - 1 }),
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
