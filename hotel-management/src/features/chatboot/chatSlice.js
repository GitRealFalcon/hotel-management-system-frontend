import api from "../../api/axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import hendleError from "../../utils/handleError";


export const chatBotApi = createAsyncThunk(
    "chatbot/api",
   async (data,thunkAPI)=>{
        try {
            const res = await api.post("chatbot",data)
            return res.data.data
        } catch (error) {
            return thunkAPI.rejectWithValue(hendleError(error))
        }
   }
)

const chatbotSlice = createSlice({
    name:"chatbot",
    initialState:{
        error:null,
        loading:false,
        data:[]
    },
    reducers:{
        userInput : (state,action)=>{
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(chatBotApi.pending,(state,action)=>{
            state.loading = true
            state.error = null
        })
        .addCase(chatBotApi.fulfilled,(state,action)=>{
            state.loading = false
            state.data.push(action.payload)
        })
        .addCase(chatBotApi.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
            state.data.push({error:true,
                errorText:action.payload
            })
        })
    }
})

export const {userInput} = chatbotSlice.actions
export default chatbotSlice.reducer