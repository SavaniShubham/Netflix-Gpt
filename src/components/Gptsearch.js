import React from 'react'
import Gptmoviesuggestion from './Gptmoviesuggestion';
import Gptsearchbar from './Gptsearchbar';
import { BG_IMG } from '../utils/constant';


const Gptsearch = () => {
  return (
    <div>
       <div className=' w-screen fixed -z-10'>
            <div className=' fixed inset-0 bg-black bg-opacity-70'></div>
            <img   className='h-screen object-cover  md:h-full ' src={BG_IMG} alt='Background '></img>
            </div>
      
      <Gptsearchbar/>
      <Gptmoviesuggestion/>
    
    </div>
  )
}

export default Gptsearch;


//gptSearchbar
//gptmoviesuggegstion