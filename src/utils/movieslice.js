import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice(
    {
        name:"movies",
        initialState :{
            nowpalyingmovies:null,
        },
        reducers:{
          addnowplayingmovies : (state,action)=>
            {   
                state.nowpalyingmovies =action.payload;
            }
        }
    }
);

export const {addnowplayingmovies}=movieslice.actions ;
export default movieslice.reducer ;