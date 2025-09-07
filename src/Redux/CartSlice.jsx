import { createSlice } from "@reduxjs/toolkit";

// set cart data to Local Storage

const setCartDataToLocalStorage = (cartdata) => {
    try {
        const localcartdata = JSON.stringify(cartdata);
        localStorage.setItem("cartData", localcartdata);
    }
    catch (error) {
        console.error('ERROR : ', error.message);
    }
}

// get cart data from LocalStorage

const getCartDataFromLocalStorage = () => {
    try {
        const localcartdata = localStorage.getItem("cartData");
        if (localcartdata === null) {
            return undefined;
        }
        const retrieveData = JSON.parse(localcartdata);
        return retrieveData;
    }
    catch (error) {
        console.error("ERROR : ", error.message);
    }
}

const CartSlice = createSlice({
    name: "cart",
    initialState: getCartDataFromLocalStorage() || [],
    reducers: {
        // add a product to the cart
        addToCart: (state, action) => {
            const existingProduct = state.find((item) => item.id === action.payload.id)
            if (existingProduct) {
                // if product already exists, increment its quantity
                existingProduct.quantity += 1;
            } else {
                // if product is new , add it to cart with quantity of 1
                state.push({ ...action.payload, quantity: 1 })
            }
            setCartDataToLocalStorage(state); // update State localStorage
        },
        // remove product from the cart
        removeToCart: (state, action) => {
            const updatedCartData = state.filter((item) => item.id !== action.payload);
            setCartDataToLocalStorage(updatedCartData); // update state in localStorage 
            return updatedCartData;
        },
        // Increment the quantity of a product in the cart
        incrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload)
            if (product) {
                product.quantity += 1;
            }
            setCartDataToLocalStorage(state);
        },
        // Decrement the quantity of a product in the cart
        decrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
            setCartDataToLocalStorage(state)
        }
    }
})


export const { addToCart, removeToCart, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer