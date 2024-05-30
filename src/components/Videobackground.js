import React from 'react';

import { useSelector } from 'react-redux';

import useMovietrailer from '../customhooks/useMovietrailer';

const Videobackground = ({movieid}) => {
   
    const trailervideo =useSelector(store => store.movies.trailervideo);

    //fetch trailer video and update the store with trailer video data 
    useMovietrailer(movieid);
   
  return (
    <div>
        <iframe width="560" height="315" 
        src={"https://www.youtube.com/embed/"+trailervideo?.key +"?si=vz4xPeZ3kGqrF4SB&amp;controls=0"}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default Videobackground ;