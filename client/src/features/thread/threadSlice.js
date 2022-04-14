import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchThreadById = createAsyncThunk(
  "thread/fetchThreadById",
  async (id) => {
    const response = await fetch(`/api/thread/${id}`);
    const body = await response.json();
    return body;
  }
);

const threadSlice = createSlice({
  name: "thread",
  initialState: {
    thread: {},
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThreadById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchThreadById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.thread = action.payload;
      })
      .addCase(fetchThreadById.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default threadSlice.reducer;
export const selectThread = (state) => state.thread.thread;
