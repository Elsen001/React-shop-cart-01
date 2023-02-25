import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartTotal:0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, images } = action.payload
            const exist = state.cart.find(item => item.id === id)
            if (exist) {
                exist.qty++;
                exist.totalPrice = exist.qty * price;
                state.cartTotal+=price
            } else {
                state.cart.push({
                    id, title, price, images, qty: 1, totalPrice: price
                })
                state.cartTotal+=price
            }
        },
        removeCart:(state,action)=>{
            const id = action.payload;
            const exist = state.cart.find(item=>item.id===id)
            if(exist.qty===1){
                state.cart=state.cart.filter(item=>item.id!==id)
                state.cartTotal-=exist.totalPrice
            }else{
                exist.qty--;
                exist.totalPrice=exist.qty*exist.price
                state.cartTotal-=exist.price
            }
        },
        deleteItems:(state,action)=>{
            const id = action.payload
            const exist = state.cart.find(item=>item.id===id)
            state.cart=state.cart.filter(item=>item.id !==id)
            state.cartTotal-=exist.totalPrice
        }
    }

})

export const { addToCart,removeCart,deleteItems } = cartSlice.actions
export default cartSlice.reducer