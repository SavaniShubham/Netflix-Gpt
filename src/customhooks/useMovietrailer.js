import { useDispatch } from "react-redux";
import { API_options } from "../utils/constant";
import { addtrailervideo } from "../utils/movieslice";
import { useEffect } from "react";


const useMovietrailer = (movieid) =>
    {
//fetch trailer video and update the store with trailer video data 
    
const dispatch =useDispatch();

const getmovievideo = async ()=>
    {
       const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US", API_options);
       const json = await data.json();
       console.log(json);
      const filtertrailers = json.results.filter(video => video.type ==="Trailer")
      console.log(filtertrailers);
      const  trailer =filtertrailers.length ? (filtertrailers.filter(video => video.name ==="Official Trailer")) :
                                               (json.results[0]);
      console.log(trailer);
      dispatch(addtrailervideo(trailer[0]));

    }
    useEffect(()=>
    {
        getmovievideo();
      

    },[]);
}

export default useMovietrailer ;