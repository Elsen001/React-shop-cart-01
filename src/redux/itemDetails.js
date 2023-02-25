import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    item:null,
    loading:false
}


export const getDetails = createAsyncThunk("getDetails",async(id)=>{
   const res = await axios.get(`https://dummyjson.com/products/${id}`)
   return res.data
})

const detailSlice = createSlice({
    name:"itemDetails",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
          builder.addCase(getDetails.pending,(state,action)=>{
               state.loading=true;

          })
          builder.addCase(getDetails.fulfilled,(state,action)=>{
            state.loading=false;
            state.item=action.payload
          })
          builder.addCase(getDetails.rejected,(state,action)=>{
            state.loading=false
          })
    }

})

export default detailSlice.reducer;