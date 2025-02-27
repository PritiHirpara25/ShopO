import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProduct' , async() => {
    console.log("fetch product action called");
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
}) 
// console.log("FetchProduct",fetchProduct);

const ProductSlice = createSlice({
    name:'products',
    initialState :{
        data:[],
        status:"idel"
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProduct.pending,(state) => {
            console.log("set pending");
            state.status = "pending"
        })
        .addCase(fetchProduct.fulfilled,(state , action) => {
            console.log("set fullfilled");
            state.status = "fulfilled",
            state.data = action.payload
        })
        .addCase(fetchProduct.rejected,(state) => {
            console.log("set rejected");
            state.status = "rejected"
        })
    }
})

export default ProductSlice.reducer