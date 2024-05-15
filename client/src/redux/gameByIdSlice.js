import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGameById = createAsyncThunk('games/fetchGameById', async (id) => {
  try {
    const response = await axios.get(`https://seteam.bikdev.site/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const gameByIdSlice = createSlice({
  name: 'gameById',
  initialState: {
    data: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchGameById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default gameByIdSlice.reducer;
