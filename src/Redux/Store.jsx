import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../Redux/CartSlice';
import ProductDetailsReducer from '../Redux/ProductDetailsSlice';
import ProductReducer from '../Redux/ProductSlice';
import wishlistReducer from '../Redux/WishlistSlice';

const store = configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
        wishlist: wishlistReducer,
        productdetails: ProductDetailsReducer
    }
})

export default store