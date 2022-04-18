import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendThreadData = createAsyncThunk(
  "newThread/sendThreadData",
  async (data) => {
    const response = await fetch("/api/thread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    return body;
  }
);

const newThreadSlice = createSlice({
  name: "newThread",
  initialState: {
    newThread: {},
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendThreadData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendThreadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newThread = action.payload;
      })
      .addCase(sendThreadData.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default newThreadSlice.reducer;
export const selectNewThread = (state) => state.newThread.newThread;
export const selectIsLoading = (state) => state.newThread.isLoading;
