import { createSlice } from "@reduxjs/toolkit";
import { loginUser, fetchUser } from "./authThunks";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
   status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
         state.status = "succeeded";
         state.user = action.payload.user
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
         state.status = "succeeded";
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      // Fetch user
      .addCase(fetchUser.pending, (state) => {
         state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
         state.status = "succeeded";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload || "Unable to fetch user";
        state.isAuthenticated = false;
        state.status = "failed";
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
