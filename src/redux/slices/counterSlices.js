import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const increaseAmount = createAction('counter/increaseAmount');

//reducer
//1.using Builder notation

const initialState = {
  value: 0,
};

// export const counterSlices = createReducer(initialState, builder => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });
//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });
//   builder.addCase(increaseAmount, (state, action) => {
//     state.value += action.payload;
//   });
// });

//1.using Map notation

export const counterSlices = createReducer(initialState, {
    [increment]: (state, action ) => {
        state.value++;
    },
    [decrement]: (state, action ) => {
        state.value--;
    },
    [increaseAmount]: (state, action ) => {
        state.value += action.payload;
    }
} )
