import { configureStore } from "@reduxjs/toolkit";
import { toggleSlice, stateValueSlice} from "./slices/exportSlices";

const store = configureStore({
    reducer: {
        toggleSlice: toggleSlice.reducer,
        stateValueSlice: stateValueSlice.reducer,
    }
})

export default store;