import React from 'react';

const Videotitle = ({title , overview}) => {
  return (
    <div className='w-screen  aspect-video absolute pt-[30%] px-6 md:px-24 bg-gradient-to-r from-black'>
        <h1 className=' font-bold text-3xl md:text-5xl text-white'>{title}</h1>
        <p className=' hidden md:inline-block pt-3 w-1/4  text-white'>{overview}</p>
        <div className='pt-3'>
            <button className=' font-semibold border bg-slate-100 py-1 px-3 md:px-10 md:py-2  text-lg rounded-md hover:bg-opacity-80'> ▷ Play</button>
            <button className=' hidden md:inline-block font-semibold border bg-gray-600 bg-opacity-40 p-2 px-8 text-lg text-white rounded-md ml-2'> ⓘ More Info</button>
        </div>

    </div>
  )
}

export default Videotitle;