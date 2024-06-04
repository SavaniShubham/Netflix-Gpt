import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { API_options } from '../utils/constant';
import { addmoviepagecredit, clearmoviepageall } from '../utils/movieslice';
import Moviepage from './Moviepage';


const Moviedetails = () => {
  const dispatch =useDispatch();
  const { moviepagedata } = useSelector(store=>store.movies);
  const {moviecredit} = useSelector(store=>store.movies);
  

  const { id } = moviepagedata ;
  const moviecredited =async (id)=>
    {
      const data  = await fetch('https://api.themoviedb.org/3/movie/'+id+'/credits?language=en-US', API_options);
      const json = await data.json();
      console.log(json);
      dispatch(addmoviepagecredit(json));


    }
      useEffect ( ()=>
      {
         !moviecredit && moviecredited(id);


        return (()=> dispatch(clearmoviepageall()));
      },[]);
     
      
   
  return (moviecredit && <div className=' h-screen bg-black'>
  
    <Moviepage/>
   </div>
  )

}

export default Moviedetails;