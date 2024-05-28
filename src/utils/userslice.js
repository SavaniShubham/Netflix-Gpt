import { createSlice } from "@reduxjs/toolkit";


const userslice = createSlice(
    {
        name :'user',
        initialState:null,
        reducers:
        {
            adduser:(state , action)=>
                {
                    // state.user.push(action.payload);
                    return action.payload;
                    //both are same 
                },
            removeuser:(state , action)=>
                    {
                        return null;
                       
                    },
        },
    }
);
export const { adduser , removeuser }= userslice.actions;
export default userslice.reducer;