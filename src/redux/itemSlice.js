import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    items:[],
    cart:[],
    limit:20,
    loading:false
}


export const getItemsFetch = createAsyncThunk("getItemsFetch",async()=>{
    
    const res = await axios.get(`https://dummyjson.com/products?skip=5&limit=100`)
    return res.data

})


const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{
        setLimit:(state,action)=>{
            state.limit=action.payload
        }
    },
    extraReducers:(builder)=>{
         builder.addCase(getItemsFetch.pending,(state,action)=>{
            state.loading=true;
            state.error=""
         })
         builder.addCase(getItemsFetch.fulfilled,(state,action)=>{
            state.items=action.payload;
            state.loading=false
         })
         builder.addCase(getItemsFetch.rejected,(state,action)=>{
            state.loading=false;
            state.error="404 not found"
         })
    }
})

export const  { setLimit } = itemSlice.actions 

export default itemSlice.reducer