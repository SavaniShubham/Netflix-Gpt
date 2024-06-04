

import  { useEffect } from 'react';
import { API_options} from '../utils/constant';

import { addtopratedmovies } from '../utils/movieslice';
import { useDispatch, useSelector } from 'react-redux';

const useTopratedmovies = ()=> {
 //fetch data from movie api and update the store
    const dispatch = useDispatch();
    const topratedmovies = useSelector(store=>store.movies.topratedmovies);
    const gettopratedmovies = async ()=>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options);
         const json = await data.json();
         console.log(json.results);
         dispatch(addtopratedmovies(json?.results));
      }
      useEffect(()=>
      {
        !topratedmovies && gettopratedmovies();
  
      },[]);
};

export default useTopratedmovies  ;

//before we write this is in Browse but then we crate it as custom - hook 
