import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendCommentData = createAsyncThunk(
  "newComment/sendCommentData",
  async (data) => {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
);

const newCommentSlice = createSlice({
  name: "newComment",
  initialState: {
    newComment: {},
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCommentData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendCommentData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newComment = action.payload;
      })
      .addCase(sendCommentData.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default newCommentSlice.reducer;
export const selectIsLoading = (state) => state.newComment.isLoading;
