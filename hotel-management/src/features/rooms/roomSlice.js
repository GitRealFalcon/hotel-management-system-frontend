import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roomsData : []
}

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers:{
        getRooms : (state,action)=>{
            state.roomsData = action.payload
        }
    }
})

export const {getRooms} = roomSlice.actions
export default roomSlice.reducer
