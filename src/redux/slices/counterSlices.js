import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const increaseAmount = createAction("counter/increaseAmount");

//reducer
//1.using builder notation

const initialState = {
  value: 0,
};

export const counterSlices = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(increaseAmount, (state, action) => {
      state.value = action.payload;
    })
    .addDefaultCase((state, action) => {
      return {
          ...state
      }
    });
});
