import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import handleError from "../../utils/handleError";

// Login Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("users/login", credentials); 
      const token = res.data.data?.token; 
      if (token) {
        localStorage.setItem("token", token);
      }
       
      return {
        user: res.data.data?.user,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

// Register Thunk
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data,thunkAPI)=>{
    try {
      const res = await api.post("users/register",data)
      return res.data?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error))
    }
  }
)

// Fetch User Thunk
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, thunkAPI) => {
    try {
      // Attach token manually if not in axios interceptors
      const token = localStorage.getItem("token");
      const config = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {};

      const res = await api.get("users/get-user-details",token );
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

// Change Password Thunk
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data,thunkAPI)=>{
    try {
      const res = await api.patch("users/change-password",data)
      return res.data?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error))
    }
  }
)

// Update User Deatails Thunk
export const updateUserDeatails = createAsyncThunk(
  "auth/updateUserDeatails",
  async (data,thunkAPI)=>{
    try {
      const res = await api.patch("users/update-details",data)
      return res.data?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error))
    }
  }
)

// Logout Thunk
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_,thunkAPI)=>{
    try {
      const res = await api.get("users/logout")
      return res.data?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error))
    }
  }
)

// Get Customers Thunk
export const getCustomers = createAsyncThunk(
  "auth/getCustomers",
  async (_,thunkAPI)=>{
    try {
      const res = await api.get("users/get-customers")
      return res.data?.data
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error))
    }
  }
)
