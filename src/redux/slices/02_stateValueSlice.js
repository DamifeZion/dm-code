import {createSlice} from "@reduxjs/toolkit";

const stateValueSlice = createSlice({
    name: "stateValueSlice",

    initialState: {
        toolbar:{
            workspaceName: ""
        }
    },

    reducers: {
        handleWorkSpaceChange(state, action){
            state.toolbar.workspaceName = action.payload;
        }
    }
})

export default stateValueSlice;