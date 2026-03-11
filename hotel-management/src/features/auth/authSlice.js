import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  changePassword,
  fetchUser,
  getCustomers,
  logOut,
  registerUser,
  updateUserDeatails,
} from "./authThunks";

const initialState = {
  customers: [],
  userBookings:[],
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  status: "idle",
  isAdmin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
        state.user = action.payload.user;
        state.loading = false;
        state.isAuthenticated = true;
        if (action.payload.user.isAdmin) {
          state.isAdmin = true;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
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
        state.user = action.payload?.data;
        state.userBookings = action.payload?.data.Bookings
        state.isAuthenticated = true;
        state.status = "succeeded";
        if (action.payload.isAdmin) {
          state.isAdmin = true;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
        state.isAuthenticated = false;
        state.status = "failed";
      })

      //Logout User
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.removeItem("token");
        state.user = null;
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.customers = []
      })
      .addCase(logOut.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })

      // Register User
      .addCase(registerUser.pending,(state,action)=>{
        state.loading = true;
        state.error = null
      })
      .addCase(registerUser.fulfilled,(state,_)=>{
        state.loading = false;
        window.location.href = "/login"
      })
      .addCase(registerUser.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })

      // Change Password
      .addCase(changePassword.pending,(state,action)=>{
        state.error = null;
        state.loading = true
      })
      .addCase(changePassword.fulfilled,(state,_)=>{
        state.loading = false
      })
      .addCase(changePassword.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })

      // Update user deaatails
      .addCase(updateUserDeatails.pending,(state,action)=>{
        state.error = null;
        state.loading = true
      })
      .addCase(updateUserDeatails.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload.user
      })
      .addCase(updateUserDeatails.rejected,(state,action)=>{
        state.error = action.payload;
        state.loading = false
      })

      // Get customes
      .addCase(getCustomers.pending,(state,action)=>{
        state.error = null;
        state.loading = true
      })
      .addCase(getCustomers.fulfilled,(state,action)=>{
        state.loading = false
        state.customers = action.payload
      })
      .addCase(getCustomers.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
      })
  },
});

export default authSlice.reducer;
