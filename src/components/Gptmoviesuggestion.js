import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const Gptmoviesuggestion = () => {

  const gemini = useSelector(store=>store.gpt);
  const { geminimoviesresult , geminimovienames } = gemini ;
    if(!geminimovienames) return null;
    return (
    <div className=' w-screen p-4 m-4  bg-black bg-opacity-70 rounded-md'>
      {
        geminimovienames.map((moviename , index)=> (

          <Movielist 
          key={moviename}
          title={moviename}
          movies={geminimoviesresult[index]}/>
         )
        )
      }
    </div>
  )
}

export default Gptmoviesuggestion