import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProduct' , async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
}) 

const ProductSlice = createSlice({
    name:'products',
    initialState :{
        data:[],
        filteredData : [],
        status:"idel"
    },
    reducers:{ 
        filterProduct : (state,action)=>{
            // here product category comes in action.payload
            const selectedCategory = action.payload; // array 
            if(selectedCategory.length === 0){
                state.filteredData = state.data
            }else{
                state.filteredData = state.data.filter((item)=>{
                    return selectedCategory.includes(item.category);
                })
            }
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProduct.pending,(state) => {
            state.status = "pending"
        })
        .addCase(fetchProduct.fulfilled,(state , action) => {
            state.status = "fulfilled",
            state.data = action.payload,
            state.filteredData = action.payload
        })
        .addCase(fetchProduct.rejected,(state) => {
            state.status = "rejected"
        })
    }
})

export const {filterProduct} = ProductSlice.actions
export default ProductSlice.reducer