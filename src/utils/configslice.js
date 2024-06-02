import { createSlice } from "@reduxjs/toolkit";



const configslice = createSlice({
    name:'config',
    initialState:
    {
        language:"en",

    },
    reducers:{
        changeLanguage:(state , action)=>
            {
                state.language=action.payload;
            },
        },
},);

export default configslice.reducer;
export const { changeLanguage}=configslice.actions;