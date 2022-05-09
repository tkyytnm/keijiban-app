import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (id) => {
    const response = await fetch(`/api/user/${id}`);
    return response.json();
  }
);

export const sendRegisterData = createAsyncThunk(
  "auth/sendRegisterData",
  async (data) => {
    const response = await fetch("/api/auth/register", {
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
    const body = await response.json();
    return body;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });
  const body = await response.json();
  return body;
});

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
      .addCase(sendRegisterData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendRegisterData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(sendRegisterData.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
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
    builder
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {};
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
    builder
      .addCase(fetchUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isRejected = true;
      });
  },
});

export default authSlice.reducer;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
