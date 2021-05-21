import {createAsyncThunk} from '@reduxjs/toolkit';
import { api } from '../axiosApi'

// UseEffect calls on page load
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await api.get('/posts');
    return response.data
  });

// post to Express.js w/MongoDB 
export const saveNewPost = createAsyncThunk(
  "posts/saveNewPost",
  async (post) => {
    const response = await api.post('/posts', post);
    return response.data
  }
)

