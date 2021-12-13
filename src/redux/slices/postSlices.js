import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//create the Action

export const fetchPosts = createAsyncThunk(
  "post/list",
  async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
          const { data } = await axios.get(
              "https://jsonplaceholder.typicode.com/posts"
          );
          return data
      } catch (error) {
          return error?.response;
      }
  }
);

//Slices

const postSlices = createSlice({
    name: "post",
    initialState: {
        loading: false,
        postsList: [],
        error: ''
    },
    extraReducers: {
        //handle pending state
        [fetchPosts.pending]: (state, action)=> {
            state.loading = true;
        },
        // handling fulfilled state
        [fetchPosts.fulfilled]: (state, action) =>{
            state.postsList = action.payload;
            state.loading = false; 
        },
        // handling error state
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
});


export default postSlices.reducer;
