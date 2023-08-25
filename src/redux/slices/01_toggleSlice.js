import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',

    initialState: {
        menu: false,
        console: false,
    },

    reducers: {
        toggleMenu(state){
            state.menu = !state.menu;
        },

        toggleConsole(state){
            state.console = !state.console
        }
    }
})


export default toggleSlice;