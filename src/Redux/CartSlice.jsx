import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state , action)=>{
            const isData = state.some(item => item.id === action.payload.id)
            if(!isData){
                state.push(action.payload);
            }
        },
        removeToCart:(state,action) => {
             return state.filter((item)=> item.id !== action.payload);
            }
    }
})


export const {addToCart,removeToCart} = CartSlice.actions;

export default CartSlice.reducer