import api from "../../api/axios";
import hendleError from "../../utils/handleError";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserBookings = createAsyncThunk(
    "booking/user",
    async (_,thunkAPI)=>{
        try {
            const res = await api.get("bookings/user")
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const getAllBookings = createAsyncThunk(
    "booking/all",
    async (_,thunkAPI)=>{
        try {
            const res =await api.get("bookings/all")
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const bookingInfo = createAsyncThunk(
    "booking/info",
    async (data,thunkAPI)=>{
        try {
            const res = await api.get("bookings/info",data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const newBooking = createAsyncThunk(
    "booking/new",
    async (data,thunkAPI)=>{
        try {
            const res = await api.post("bookings/new",data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const cancelBooking = createAsyncThunk(
    "booking/cancel",
    async (data,thunkAPI)=>{
        try {
            const res = await api.patch("bookings/cancel",data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const checkOut = createAsyncThunk(
    "booking/checkout",
    async (data,thunkAPI)=>{
        try {
            const res = await api.patch("bookings/checkout",data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)

export const checkIn = createAsyncThunk(
    "booking/checkin",
    async (data,thunkAPI)=>{
        try {
            const res = await api.patch("bookings/checkin",data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
    }
)