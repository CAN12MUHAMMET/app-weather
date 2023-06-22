import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  content: {},
  status: "idle",
  error: null,
};
export const fetchContent = createAsyncThunk('content/fetchContent', async (city) => {
  const apiKey = "efa21ac35689d1806c6537fdd796aaa7";
   return await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
        appid: apiKey,
        q: city,
        lang: "tr",
        units: "metric"
    }
}).then((res) => Promise.resolve(res.data))
.catch((err) => Promise.reject(err.data))
})
  
export const weatherSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = "success";
        state.content = action.payload;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = "failed";
        state.error = action.error;
        
      });
  },
});
export default weatherSlice.reducer;
