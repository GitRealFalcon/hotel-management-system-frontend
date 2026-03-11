import { createSlice } from "@reduxjs/toolkit";
import {
  getAllBookings,
  bookingInfo,
  cancelBooking,
  checkIn,
  checkOut,
  newBooking,
  getUserBookings,
} from "./bookingThunks";

const initialState = {
  allbookings: [],
  userBookings: [],
  booking: {},
  message: null,
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    clearBooking: (state, action) => {
      state.booking = {};
    },
  },
  extraReducers: (builder) => {
    builder

      // New Booking
      .addCase(newBooking.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(newBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.userBookings.push(action.payload.data);
      })
      .addCase(newBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // User Bookings
      .addCase(getUserBookings.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getUserBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.userBookings = action.payload.data;
      })
      .addCase(getUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // All Bookings
      .addCase(getAllBookings.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.allbookings = action.payload.data;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Cancel Booking
      .addCase(cancelBooking.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(cancelBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(cancelBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CheckOut
      .addCase(checkOut.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(checkOut.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(checkOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CheckIn
      .addCase(checkIn.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(checkIn.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(checkIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Booking Info
      .addCase(bookingInfo.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(bookingInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.booking = action.payload.data;
      })
      .addCase(bookingInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
