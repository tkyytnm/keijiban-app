import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCommentsByThread = createAsyncThunk(
  "comments/fetchCommentsByThread",
  async (threadId) => {
    const response = await fetch(`/api/comment/${threadId}`);
    const body = await response.json();
    const sorted = body.sort((a, b) => a.id - b.id);
    return sorted;
  }
);

export const deleteCommentById = createAsyncThunk(
  "comments/deleteCommentById",
  async (id) => {
    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });
    return await response.json();
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
    builder
      .addCase(deleteCommentById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteCommentById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteCommentById.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default commentsSlice.reducer;
export const selectComments = (state) => state.comments.comments;
export const selectIsLoading = (state) => state.comments.isLoading;
