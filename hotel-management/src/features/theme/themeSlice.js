import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark : document.documentElement.classList.contains("dark")
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme : (state,action)=>{
                state.isDark = action.payload
        }
    }
})

export const {setTheme} = themeSlice.actions

export default themeSlice.reducer