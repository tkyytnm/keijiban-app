import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCommentsByThread = createAsyncThunk(
  "comments/fetchCommentsByThread",
  async (threadId) => {
    const response = await fetch(`/api/comment/${threadId}`);
    const body = await response.json();
    return body;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByThread.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsByThread.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsByThread.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = false;
      });
  },
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
export const selectIsLoading = (state) => state.comments.isLoading;
