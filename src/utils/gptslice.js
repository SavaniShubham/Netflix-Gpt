import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice(
    {
        name : 'gpt',
        initialState:{
            showgptsearch : false ,
            geminimoviesresult : null ,
            geminimovienames :null ,
        },
        reducers :{
        toggleGptsearchview : (state )=>
            {
                state.showgptsearch =! state.showgptsearch;
            },
            addgeminiMovieresult : (state , action)=>
                {
                    const {movienames , movieresult} = action.payload ;
                    state.geminimovienames = movienames ;
                    state.geminimoviesresult = movieresult ;
                }
            
        }
    }
)
export default gptslice.reducer ;
export const {toggleGptsearchview , addgeminiMovieresult} = gptslice.actions;