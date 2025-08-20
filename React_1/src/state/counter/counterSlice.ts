import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// For typescript we need to add types for initialState
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // If we have a payload then we need to specify its type using PayloadAction
    // This is a generic type that takes the type of the payload
    // Here it is number, but it can be an object too (press Ctrl + Space to know more @number)
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// EXPORT BOTH ACTIONS AND REDUCER
// These actions will be used by the components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// This reducer will be used by the store
export default counterSlice.reducer;
