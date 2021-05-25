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
  reducers: {
    resetStatus(state) {state.status = 'idle'}
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
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
      const post = action.payload;
      const errors = (post["errors"]) ? post["errors"] : null;
      if (!!errors){
        state.status = 'failed'
        state.error = errors
      } else {
        state.posts.push(post)
      }
    },
    [saveNewPost.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error
  },
}
});

export const { resetStatus } = postSlice.actions
export default postSlice.reducer

