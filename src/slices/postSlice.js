import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../axiosApi'

// ACTIONS
// UseEffect calls on page load
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await api.get('/posts');
    return response.data
  });

// post to Express/Mongo
export const saveNewPost = createAsyncThunk(
  "posts/saveNewPost",
  async (post) => {
    const response = await api.post('/posts', post);
    return response.data
  }
)

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

