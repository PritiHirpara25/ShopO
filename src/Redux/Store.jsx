import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Redux/ProductSlice'

const store = configureStore({
    reducer:{
        product : ProductReducer
    }
})

export default store