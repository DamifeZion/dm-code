import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice, } from "./slices/exportSlices";

const store = configureStore({
    reducer: {
        toggleSlice: toggleSlice.reducer,
    }
})

export default store;