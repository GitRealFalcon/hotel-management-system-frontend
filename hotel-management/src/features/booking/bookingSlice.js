import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookings: []
}

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers: {
        setBooking:(state,action)=>{
            state.bookings = action.payload
        }
    }
})

export const {setBooking} = bookingSlice.actions

export default bookingSlice.reducer