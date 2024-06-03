import React, { useRef } from 'react'
import lang from '../utils/languageconstant';
import { useSelector } from 'react-redux';
// import openai from '../utils/openai';
import { model  } from '../utils/geminiai';

const Gptsearchbar = () => {
    const selectlang = useSelector(store => store.config.language);
    const searchbarinput = useRef(null);

    const handlegptsearchclick = async ()=>
      {
        console.log(searchbarinput.current.value );
        

        //write the proprt query to get the results 
          const gptquery = "Act as movie recommandation system and suggest some movies for the query :"+searchbarinput.current.value +" . only give me the name of 5 movies , comma seperated like the example given ahed . Example Results : dhoom , krish , spider-man , laapata ladies , dil chahata hai"
        //make an api call to gpt api and get movie results
          // const gptresults = await openai.chat.completions.create({
         //   messages: [{ role: 'user', content: gptquery }],
       //   model: 'gpt-3.5-turbo',
          // });

         //         console.log(gptresults.choices);

 

  const result = await model.generateContent(gptquery);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  

      }

  return (
    <div className=' pt-[10%] flex justify-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 grid grid-cols-12'>
            
            <input ref={searchbarinput} type='text'
             className='p-2 m-2 col-span-9 rounded-md'
             placeholder={lang[selectlang].gptsearchplaceholder}></input>
            <button 
            className=' px-4  col-span-3 m-2 bg-red-700 text-white rounded-lg'
            onClick={handlegptsearchclick}>{lang[selectlang].search}</button>
            
        </form>
    </div>
  )
}

export default Gptsearchbar;