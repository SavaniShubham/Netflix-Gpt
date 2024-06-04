import React from 'react'
import Moviecard from './Moviecard';


const Movielist = ({title , movies}) => {
    console.log(movies);

  return (
<div className='px-6 '>
    <h1 className='text-lg md:text-3xl py-3 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar '>
      
        <div className='flex'>  

            { movies?.map( (movie) => (
              
       
               <Moviecard key={movie.id} posterpath = {movie.poster_path}  showmovie= {movie}/>
               
             
            )
          )
            }
           
        </div>
    </div>
    </div>
  )
}

export default Movielist;