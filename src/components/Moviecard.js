import React from 'react';
import { IMG_cdn_URL } from '../utils/constant';


const Moviecard = ({posterpath}) => {
  return (
    <div className=' w-52 pr-4'>
    <img alt='Movie card'
        src={IMG_cdn_URL + posterpath} />
        </div>
  )
}

export default Moviecard