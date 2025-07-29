import React from 'react'

function VideoTitle({mainMove}) {

  return (
    <div className=' aspect-video pt-[20%]  z-99 px-24 absolute text-white bg-gradient-to-r from  block' >

      <h1 className='text-4xl'>{mainMove.Title}</h1>
      <p className='text-lg py-6 w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis?</p>
      <div className=''>
        <button></button>
        <button></button>
        <button className=" p-4 px-10 bg-gray-500/90 rounded-lg   text-lg text-white "> ▶  play</button>
        <button className=" mx-2 p-4 px-10 bg-gray-500/90 rounded-lg   text-lg text-white ">More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
