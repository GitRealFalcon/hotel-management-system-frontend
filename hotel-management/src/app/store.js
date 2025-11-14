import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/rooms/roomSlice"
import themeReducer from "../features/theme/themeSlice"
import customerReducer from "../features/customer/customerSlice"
import bookingReducer from "../features/booking/bookingSlice"
import transectionReducer from "../features/payment/paymentSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    theme: themeReducer,
    customer: customerReducer,
    booking: bookingReducer,
    transection: transectionReducer
  },
});

export default store;
