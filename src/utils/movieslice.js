import { createSlice } from "@reduxjs/toolkit";


const movieslice = createSlice(
    {
        name:"movies",
        initialState :{
            nowpalyingmovies:null,
            trailervideo :null,
            popularmovies:null,
            topratedmovies:null,
            upcomingmovies:null,
        },
        reducers:{
          addnowplayingmovies : (state,action)=>
            {   
                state.nowpalyingmovies =action.payload;
            },
            addpopularmovies : (state,action)=>
                {   
                    state.popularmovies =action.payload;
                },
             addtopratedmovies : (state,action)=>
                    {   
                        state.topratedmovies =action.payload;
                    },
             addupcomingmovies : (state,action)=>
                        {   
                            state.upcomingmovies =action.payload;
                        },
            addtrailervideo : (state , action)=>
                {
                    state.trailervideo = action.payload;
                }
        }
    }
);

export const {addnowplayingmovies , addtrailervideo , addpopularmovies , addtopratedmovies , addupcomingmovies }=movieslice.actions ;
export default movieslice.reducer ;