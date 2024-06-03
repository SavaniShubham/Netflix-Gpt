import React from 'react';
import { IMG_cdn_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addmoviepagedata, togglemoviedetailsview } from '../utils/movieslice';



const Moviecard = ({posterpath , showmovie}) => {
  const dispatch = useDispatch();

  
  const makemoviepage = ()=>
    {
      dispatch(addmoviepagedata(showmovie));
      dispatch( togglemoviedetailsview());
      
    }
  return (posterpath && (
    <div className=' w-52 pr-4' onClick={makemoviepage}>
    <img alt='Movie card' className=' h-72'
        src={IMG_cdn_URL + posterpath} />
        </div>)
  )
}

export default Moviecard;