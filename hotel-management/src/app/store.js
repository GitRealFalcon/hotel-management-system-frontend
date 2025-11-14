import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/rooms/roomSlice"
import themeReducer from "../features/theme/themeSlice"
import customerReducer from "../features/customer/customerSlice"
import bookingReducer from "../features/booking/bookingSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    theme: themeReducer,
    customer: customerReducer,
    booking: bookingReducer
  },
});

export default store;
