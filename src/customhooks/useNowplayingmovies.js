import  { useEffect } from 'react';
import { API_options} from '../utils/constant';

import { addnowplayingmovies } from '../utils/movieslice';
import { useDispatch, useSelector } from 'react-redux';

const useNowplayingmovies = ()=> {
 //fetch data from movie api and update the store
    const dispatch = useDispatch();
    const nowplayingmovie = useSelector(store=>store.movies.nowplayingmovie);
    const getnowplayingmovies = async ()=>
      {
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
         const json = await data.json();
         console.log(json.results);
         dispatch(addnowplayingmovies(json?.results));
      }
      useEffect(()=>
      {
         !nowplayingmovie && getnowplayingmovies();
  
      },[]);
};

export default useNowplayingmovies ;

//before we write this is in Browse but then we crate it as custom - hook 
