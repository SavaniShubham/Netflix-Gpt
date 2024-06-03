import React from 'react';

import { IMG_cdn_URL } from '../utils/constant';
import {  useSelector } from 'react-redux';

const Moviepage = () => {
    const { moviepagedata } = useSelector(store=>store.movies);

    const {original_title ,release_date, vote_average, overview , poster_path  } = moviepagedata ;
    const {moviecredit}=useSelector(store=>store.movies);
    const {crew , cast} = moviecredit ;
  return (
    <div className=' text-white'>
         <div className=' p-[10%]'>
       <div className='flex'>
          <div className=' w-1/2 ' >
          <img alt='Movie card' 
        src={IMG_cdn_URL + poster_path} />
        </div>
          <div className='ml-20'>
            <div className=' text-5xl font-bold pb-10'>{original_title}</div>
            <div className='pb-5'> 
            <span className=' text-3xl font-semibold text-gray-500'>Rating : </span>
            <span className=' text-lg'>{ vote_average + " ⭐"}</span></div>
            <div className='pb-5'> 
            <span className=' text-3xl font-semibold  text-gray-500'>Overview: </span>
            <span className=' text-lg'>{overview}</span></div>
            <div className='pb-5'> 
            <span className=' text-2xl font-semibold  text-gray-500'>Release Date : </span>
            <span className=' text-lg'>{release_date}</span></div>
            
            <div className='pb-5'> 
            <span className=' text-2xl font-semibold  text-gray-500'>Director : </span>
            <span className=' text-lg'>{crew[0].name}</span></div>
            <div className='pb-5'> 
            <span className=' text-2xl font-semibold  text-gray-500'>Actors : </span>
            <span className=' text-lg'>{cast[0].name + " , "+ cast[1].name + " , "+  cast[2].name}</span></div>
           
           
            </div>
          

          
        </div>
    </div>
    </div>
  )
}

export default Moviepage