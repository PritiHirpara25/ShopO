import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Redux/ProductSlice'
import CartReducer from '../Redux/CartSlice'

const store = configureStore({
    reducer:{
        product : ProductReducer,
        cart: CartReducer
    }
})

export default store