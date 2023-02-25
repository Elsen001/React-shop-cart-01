import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    item:[],
    loading:false
}


export const searchItems =createAsyncThunk("searchItems",async(keyword)=>{
   const res = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
   return res.data
})

const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers:(builder)=>{
       builder.addCase(searchItems.pending,(state,action)=>{
            state.loading=true;

       })
       builder.addCase(searchItems.fulfilled,(state,action)=>{
           state.item=action.payload
            state.loading=false;
       })
       builder.addCase(searchItems.rejected,(state,action)=>{
            state.loading=false;
       })
    }

})

export default searchSlice.reducer