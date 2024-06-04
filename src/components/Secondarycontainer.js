import React from 'react';
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const Secondarycontainer = () => {
  const movies = useSelector(store => store.movies);
  return (movies.nowpalyingmovies &&(
    <div className=' w-screen bg-black'>
      <div className='md:-mt-60 relative z-20 pl-4 md:pl-10'>
      <Movielist title={"Now playing "} movies={movies.nowpalyingmovies} />
      <Movielist title={"Top Rated "} movies={movies.topratedmovies} />
      <Movielist title={"Popular "} movies={movies.popularmovies} />
      <Movielist title={"UpComing "} movies={movies.upcomingmovies} />

      
      </div>
    </div>
  ))
}

export default Secondarycontainer;


//   movielist -popular
          //     moviecard*n
          //  movielist -now playing
          //   movielist -trending
          //    movielist -horror
      