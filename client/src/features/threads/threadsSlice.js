import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchThreads = createAsyncThunk(
  "threads/fetchThreads",
  async () => {
    const response = await fetch("/api/thread");
    const body = await response.json();
    return body;
  }
);

const threadsSlice = createSlice({
  name: "threads",
  initialState: {
    threads: [],
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreads.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchThreads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.threads = action.payload;
      })
      .addCase(fetchThreads.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default threadsSlice.reducer;
export const selectThreads = (state) => state.threads.threads;
export const selectIsLoading = (state) => state.threads.isLoading;