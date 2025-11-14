import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    customers: []
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers:{
        setCustomers:(state,action)=>{
            state.customers = action.payload
        }
    }
})

export const {setCustomers} = customerSlice.actions

export default customerSlice.reducer