import React from 'react';

const Videotitle = ({title , overview}) => {
  return (
    <div className='pt-40 ml-16'>
        <h1>{title}</h1>
        <p className=' w-1/4'>{overview}</p>
        <div className='pt-3'>
            <button className=' font-semibold border bg-slate-100 p-2 px-10 text-lg rounded-md'> ▷ Play</button>
            <button className=' font-semibold border bg-gray-600 bg-opacity-40 p-2 px-8 text-lg text-white rounded-md ml-2'> ⓘ More Info</button>
        </div>

    </div>
  )
}

export default Videotitle;