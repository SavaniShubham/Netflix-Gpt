import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice(
    {
        name : 'gpt',
        initialState:{
            showgptsearch : false ,
        },
        reducers :{
        toggleGptsearchview : (state )=>
            {
                state.showgptsearch =! state.showgptsearch;

            },
        }
    }
)
export default gptslice.reducer ;
export const {toggleGptsearchview} = gptslice.actions;