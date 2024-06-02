import React from 'react'
import lang from '../utils/languageconstant';
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
    const selectlang = useSelector(store => store.config.language);
    console.log(selectlang);
  return (
    <div className=' pt-[10%] flex justify-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 grid grid-cols-12'>
            
            <input type='text' className='p-2 m-2 col-span-9 rounded-md' placeholder={lang[selectlang].gptsearchplaceholder}></input>
            <button className=' px-4  col-span-3 m-2 bg-red-700 text-white rounded-lg'>{lang[selectlang].search}</button>
            
        </form>
    </div>
  )
}

export default Gptsearchbar;