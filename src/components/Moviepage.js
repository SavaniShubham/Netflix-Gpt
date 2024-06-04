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
         <div className='pt-[50%] md:p-[10%]'>
       <div className='flex justify-center'>
          <div className=' pl-10 ' >
          <img alt='Movie card' className='h-[400px] w-[500px] md:h-[600px] md:w-[1200px]'
        src={IMG_cdn_URL + poster_path} />
        </div>
          <div className='ml-10 md:ml-20'>
            <div className='text-4xl pb-2 md:text-6xl font-bold md:pb-10'>{original_title}</div>
            <div className=' pb-2 md:pb-5'> 
            <span className='text-2xl md:text-4xl font-semibold text-gray-500'>Rating : </span>
            <span className=' text-md md:text-lg'>{ vote_average + " ⭐"}</span></div>
            <div className='pb-2 md:pb-5'> 
            <span className='text-2xl md:text-4xl font-semibold  text-gray-500'>Overview: </span>
            <span className=' text-md md:text-lg'>{overview}</span></div>
            <div className='pb-2 md:pb-5'> 
            <span className=' text-2xl  md:text-4xl font-semibold  text-gray-500'>Release Date : </span>
            <span className=' text-md md:text-lg'>{release_date}</span></div>
            
            <div className='pb-2 md:pb-5'> 
            <span className=' text-2xl md:text-4xl font-semibold  text-gray-500'>Director : </span>
            <span className='text-md md:text-lg'>{crew[0].name}</span></div>
            <div className='pb-2 md:pb-5'> 
            <span className=' text-2xl  md:text-4xl font-semibold  text-gray-500'>Actors : </span>
            <span className=' text-md md:text-lg'>{cast[0].name + " , "+ cast[1].name + " , "+  cast[2].name}</span></div>
           
           
            </div>
          

          
        </div>
    </div>
    </div>
  )
}

export default Moviepage