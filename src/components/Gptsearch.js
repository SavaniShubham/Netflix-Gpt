import React from 'react'
import Gptmoviesuggestion from './Gptmoviesuggestion';
import Gptsearchbar from './Gptsearchbar';
import { BG_IMG } from '../utils/constant';


const Gptsearch = () => {
  return (
    <div>
       <div className=' absolute -z-10'>
            <div className=' absolute inset-0 bg-black bg-opacity-70'></div>
            <img  src={BG_IMG} alt='Background '></img>
            </div>
      <Gptsearchbar/>
      <Gptmoviesuggestion/>
    </div>
  )
}

export default Gptsearch;


//gptSearchbar
//gptmoviesuggegstion