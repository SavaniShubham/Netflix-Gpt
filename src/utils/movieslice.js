import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice(
    {
        name:"movies",
        initialState :{
            nowpalyingmovies:null,
            trailervideo :null,
        },
        reducers:{
          addnowplayingmovies : (state,action)=>
            {   
                state.nowpalyingmovies =action.payload;
            },
            addtrailervideo : (state , action)=>
                {
                    state.trailervideo = action.payload;
                }
        }
    }
);

export const {addnowplayingmovies , addtrailervideo}=movieslice.actions ;
export default movieslice.reducer ;