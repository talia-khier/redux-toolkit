import { configureStore } from "@reduxjs/toolkit";
import  counterSlices  from "../slices/counterSlices-v2";
import postReducer from "../slices/postSlices";


const store = configureStore({
    reducer: {
        counter: counterSlices,
        post: postReducer
    },
})

export default store;