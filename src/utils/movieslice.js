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
            moviepagedata:null,
            showmoviedetails:false ,
            moviecredit : null,
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
                },
             addmoviepagedata : (state , action)=>
                    {
                        state.moviepagedata = action.payload;
                    },
             togglemoviedetailsview : (state )=>
                        {
                            state.showmoviedetails =! state.showmoviedetails;
                        },
              addmoviepagecredit : (state , action)=>
                            {
                                state.moviecredit = action.payload;
                            },
                clearmoviepageall :(state)=>
                    {
                        state.moviecredit=null;
                        state.showmoviedetails=false;
                        state.moviepagedata=null;
                    }
        }
    }
);

export const {addnowplayingmovies , addtrailervideo , addpopularmovies , addtopratedmovies , addupcomingmovies  , addmoviepagedata , togglemoviedetailsview , addmoviepagecredit , clearmoviepageall }=movieslice.actions ;
export default movieslice.reducer ;