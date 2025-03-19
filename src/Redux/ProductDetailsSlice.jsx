import { createSlice } from "@reduxjs/toolkit";



const ProductDetailsSlice = createSlice({
    name:"productDetails",
    initialState : {},
    reducers : {
        add_Products : (state , action) => {
            return action.payload
        }
    }
})

export default ProductDetailsSlice.reducer

export const {add_Products} = ProductDetailsSlice.actions