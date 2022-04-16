import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendLoginData = createAsyncThunk(
  "auth/sendLoginData",
  async (data) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = response.json();
    return body;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isRejected: false,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendLoginData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(sendLoginData.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default authSlice.reducer;
export const selectUser = (state) => state.auth.user;
