import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// set data to localStorage

const setDataToLocalStorage = (data) => {
    try {
        const localData = JSON.stringify(data);
        localStorage.setItem('localData', localData);
    }
    catch (error) {
        console.error("ERROR:", error.message);
    }
}

// get data from localStorage

const getDataFromLocalStorage = () => {
    try {
        const storageData = localStorage.getItem('localData');
        if(storageData === null){
            return undefined;   
        }
        const retriveData = JSON.parse(storageData);
        return retriveData;
    } catch (error) {
        console.error("ERROR:", error.message);
    }

}

export const fetchProduct = createAsyncThunk('fetchProduct', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data;
})

const ProductSlice = createSlice({
    name: 'products',
    initialState: getDataFromLocalStorage() || {
        data: [],
        filteredData: [],
        status: "idel"
    },
    reducers: {
        filterProduct: (state, action) => {
            // here product category comes in action.payload
            const selectedCategory = action.payload; // array 
            if (selectedCategory.length === 0) {
                state.filteredData = state.data
            } else {
                state.filteredData = state.data.filter((item) => {
                    return selectedCategory.includes(item.category);
                })
            }

            // here updated data set into localStorage
            setDataToLocalStorage(state);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.status = "pending"
        })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = "fulfilled",
                    state.data = action.payload,
                    state.filteredData = action.payload
                setDataToLocalStorage(state); // set to localStorage

            })
            .addCase(fetchProduct.rejected, (state) => {
                state.status = "rejected"
            })
    }
})

export const { filterProduct } = ProductSlice.actions
export default ProductSlice.reducer