import React from 'react';

const Videotitle = ({title , overview}) => {
  return (
    <div className='w-screen  aspect-video absolute pt-[20%] px-24 bg-gradient-to-r from-black'>
        <h1 className=' font-bold text-5xl text-white'>{title}</h1>
        <p className='pt-3 w-1/4  text-white'>{overview}</p>
        <div className='pt-3'>
            <button className=' font-semibold border bg-slate-100 p-2 px-10 text-lg rounded-md hover:bg-opacity-80'> ▷ Play</button>
            <button className=' font-semibold border bg-gray-600 bg-opacity-40 p-2 px-8 text-lg text-white rounded-md ml-2'> ⓘ More Info</button>
        </div>

    </div>
  )
}

export default Videotitle;