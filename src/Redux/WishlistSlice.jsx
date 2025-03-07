import { createSlice } from "@reduxjs/toolkit";

const setWishlistDataToLocalStorage = (wishlistData) => {
    try {
        const data = JSON.stringify(wishlistData);
        localStorage.setItem('wishlistData', data);
    } catch (error) {
        console.error("ERROR : ", error.message);
    }
}

const getWishlistDataFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("wishlistData");
        if (data === null) {
            return undefined;
        }
        const retrivedata = JSON.parse(data);
        return retrivedata;
    } catch (error) {
        console.error("ERROR : ", error.message);
    }
}

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: getWishlistDataFromLocalStorage() || [],
    reducers: {
        addToWishList: (state, action) => {
            const product = state.find((item) => item.id === action.payload.id);
            if (product) {
                alert("Product Already Added to whishlist !");
            } else {
                state.push(action.payload)
            }
            setWishlistDataToLocalStorage(state);
        },
        removeToWishList: (state, action) => {
            const removeData = state.filter((item) => item.id !== action.payload);
            setWishlistDataToLocalStorage(removeData);
            return removeData;
        }
    }
})

export default WishlistSlice.reducer

export const { addToWishList, removeToWishList } = WishlistSlice.actions