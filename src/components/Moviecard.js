import React from 'react';
import { IMG_cdn_URL } from '../utils/constant';


const Moviecard = ({posterpath}) => {
  return (posterpath && (
    <div className=' w-52 pr-4'>
    <img alt='Movie card' className=' h-72'
        src={IMG_cdn_URL + posterpath} />
        </div>)
  )
}

export default Moviecard