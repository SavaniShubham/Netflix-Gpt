import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import Videobackground from './Videobackground';

const Mainconatiner = () => {

    const movies = useSelector(store => store.movies?.nowpalyingmovies);

    if(movies === null) return;

    const mainmovie = movies[0];
    console.log(mainmovie);

    const {original_title , overview ,id } = mainmovie ;
  return (
    <div>
        <Videotitle title={original_title} overview={overview} />
        <Videobackground movieid={id}/>
    </div>
  )
}

export default Mainconatiner;