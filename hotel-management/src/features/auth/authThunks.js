import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import handleError from "../../utils/handleError"; // ✅ fixed typo

// 🔹 Login user thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("users/login", credentials);
      

      // Save token
      const token = res.data.data?.token;
      if (token) {
        localStorage.setItem("token", token);
      }

      // Return structured payload
      return {
        user: res.data.data?.user,
        token,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);

// 🔹 Fetch user details thunk
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, thunkAPI) => {
    try {
      // Attach token manually if not in axios interceptors
      const token = localStorage.getItem("token");
      const config = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {};

      const res = await api.get("users/get-user-details", config);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleError(error));
    }
  }
);
