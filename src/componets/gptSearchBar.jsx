import React from 'react'
import GptSearch from './GptSearch'
import language from '../utils/languageclonstant'
import { useSelector } from 'react-redux'

function  GptSearchBar() {
    const languageKey = useSelector(state=> state.config.language)
  return (
    <div className='pt-[8%] w-1/2 flex justify-center '>
        <form action="
        "
        className=' grid grid-cols-12   bg-black'>
            <input className='p-4 m-4  col-span-9 bg-white' placeholder={language[languageKey].Placehoder} type="text" />
            <button className='py-6 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg '> {language[languageKey].Search}</button>
        </form>
      
    </div>
  )
}

export default  GptSearchBar