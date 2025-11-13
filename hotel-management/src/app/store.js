import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import roomReducer from "../features/rooms/roomSlice"
import themeReducer from "../features/theme/themeSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    theme: themeReducer
  },
});

export default store;
