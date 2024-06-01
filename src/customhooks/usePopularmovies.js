

import  { useEffect } from 'react';
import { API_options} from '../utils/constant';

import { addpopularmovies } from '../utils/movieslice';
import { useDispatch } from 'react-redux';

const usePopularmovies = ()=> {
 //fetch data from movie api and update the store
    const dispatch = useDispatch();
    const getPopularmovies = async ()=>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
         const json = await data.json();
         console.log(json.results);
         dispatch(addpopularmovies(json?.results));
      }
      useEffect(()=>
      {
        getPopularmovies ();
  
      },[]);
};

export default usePopularmovies  ;

//before we write this is in Browse but then we crate it as custom - hook 
