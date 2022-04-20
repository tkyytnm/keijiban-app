import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// username and email
export const changeProfile = createAsyncThunk(
  "user/changeProfile",
  async (data) => {
    const response = await fetch("/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();
    return body;
  }
);

// password
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (data) => {
    const response = await fetch("/api/user/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
);

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await fetch(`/api/user/${id}`, {
    method: "DELETE",
  });
  return await response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
    isRejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(changeProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
    builder
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default userSlice.reducer;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.user;
