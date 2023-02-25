import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    category:[],
    loading:false,
    error:"",
};

export const fetchCategory = createAsyncThunk("fetchCategory",async ()=>{
    const res = await axios.get("https://dummyjson.com/products/categories");
    return res.data
})


const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.loading=true;
            state.error=""
        });
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.category=action.payload;
            state.loading=false;
        });
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.loading=false;
            state.error="Error 404 not found"
        })
    }

})

export default categorySlice.reducer