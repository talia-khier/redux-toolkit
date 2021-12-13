import { configureStore } from "@reduxjs/toolkit";
import  counterSlices  from "../slices/counterSlices-v2";


const store = configureStore({
    reducer: {
        counter: counterSlices,
    },
})

export default store;