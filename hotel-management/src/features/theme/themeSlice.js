import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark : document.documentElement.classList.contains("dark"),
    isOpen: false
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme : (state,action)=>{
                state.isDark = action.payload
        },
        toggleSideBar: (state,action)=>{
            state.isOpen = action.payload
        }
    }
})

export const {setTheme,toggleSideBar} = themeSlice.actions

export default themeSlice.reducer