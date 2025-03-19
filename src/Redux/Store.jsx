import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Redux/ProductSlice'
import CartReducer from '../Redux/CartSlice'
import wishlistReducer from '../Redux/WishlistSlice'
import ProductDetailsReducer from '../Redux/ProductDetailsSlice'

const store = configureStore({
    reducer:{
        product : ProductReducer,
        cart: CartReducer,
        wishlist : wishlistReducer,
        productdetails: ProductDetailsReducer
    }
})

export default store