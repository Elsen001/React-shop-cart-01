import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    categoryItems:[],
    loading:false
}


export const fetchCategoryItems = createAsyncThunk("fetchCategoryItems",async (keyword)=>{
    const res = await axios.get(`https://dummyjson.com/products/category/${keyword}`);
    return res.data
})

const categoryİtemSlice= createSlice({
     name:"categoryİtems",
     initialState,
     reducers:{},
     extraReducers:(builder)=>{
        builder.addCase(fetchCategoryItems.pending,(state,action)=>{
               state.loading=true
        })
        builder.addCase(fetchCategoryItems.fulfilled,(state,action)=>{
               state.categoryItems=action.payload
               state.loading=false
        })
        builder.addCase(fetchCategoryItems.rejected,(state,action)=>{
            state.loading=false
        })
     }
})

export default categoryİtemSlice.reducer