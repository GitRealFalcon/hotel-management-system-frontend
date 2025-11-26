import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark : document.documentElement.classList.contains("dark"),
    isOpen: false,
    sideNavebar: false,
    showProfile: false
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
        },
        toggleSideNavbar: (state, action)=>{
            state.sideNavebar = action.payload
        },
        toggleShowProfile: (state,action)=>{
            state.showProfile = action.payload
        }
    }
})

export const {setTheme,toggleSideBar,toggleSideNavbar,toggleShowProfile} = themeSlice.actions

export default themeSlice.reducer