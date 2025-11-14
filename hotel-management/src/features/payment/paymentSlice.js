import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transections:[]
}

const transectionSlice = createSlice({
    name:'transection',
    initialState,
    reducers:{
        setTransection: (state,action)=>{
                state.transections = action.payload
        }
    }
})

export const {setTransection} = transectionSlice.actions
export default transectionSlice.reducer