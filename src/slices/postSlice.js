import { createSlice } from '@reduxjs/toolkit';
import {fetchPosts, saveNewPost} from '../services/postDataService'

// set initial state of slice of store
export const initialState = {
  status: 'idle',
  error: null,
  posts: [],
};

// a slice of root reducer
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'success'
      state.posts.push(...action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message;
    },
    [saveNewPost.fulfilled]: (state, action) => {
      const post = action.payload
      state.posts.push(post)
    },
    [saveNewPost.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});
  
export default postSlice.reducer

