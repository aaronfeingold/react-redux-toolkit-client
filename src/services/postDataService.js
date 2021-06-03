import {createAsyncThunk} from '@reduxjs/toolkit';
import { api } from '../axiosApi'

export const saveNewPost = createAsyncThunk(
  "posts/saveNewPost",
  async (post) => {
    const response = await api.post('/posts', post);
    return response.data
  }
)

