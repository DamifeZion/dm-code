import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',

    initialState: {
        menu: false,
    },

    reducers: {
        toggleMenu(state){
            state.menu = !state.menu;
        }
    }
})


export default toggleSlice;