import { configureStore } from "@reduxjs/toolkit";
import categoryİtemSlice from "./categoryİtemSlice";
import categorySlice from "./categorySlice";
import itemSlice from "./itemSlice";
import cartSlice from "./cartSlice";
import detailSlice from "./itemDetails"
import SearchSlice from "./SearchSlice";

export const store = configureStore({
    reducer:{
       category:categorySlice,
       items:itemSlice,
       categoryItems:categoryİtemSlice,
       cart:cartSlice,
       itemDetails:detailSlice,
       search:SearchSlice

    }
})