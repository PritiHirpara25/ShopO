import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Redux/ProductSlice'
import CartReducer from '../Redux/CartSlice'
import wishlistReducer from '../Redux/WishlistSlice'

const store = configureStore({
    reducer:{
        product : ProductReducer,
        cart: CartReducer,
        wishlist : wishlistReducer
    }
})

export default store