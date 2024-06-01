


import  { useEffect } from 'react';
import { API_options} from '../utils/constant';

import { addupcomingmovies } from '../utils/movieslice';
import { useDispatch } from 'react-redux';

const useUpcomingrmovies = ()=> {
 //fetch data from movie api and update the store
    const dispatch = useDispatch();
    const getupcomingmovies = async ()=>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
         const json = await data.json();
         console.log(json.results);
         dispatch(addupcomingmovies(json?.results));
      }
      useEffect(()=>
      {
        getupcomingmovies();
  
      },[]);
};

export default useUpcomingrmovies   ;

//before we write this is in Browse but then we crate it as custom - hook 
