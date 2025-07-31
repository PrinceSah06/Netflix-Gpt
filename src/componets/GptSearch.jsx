import React from 'react'
import GptSearchBar from './gptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constent'

function GptSearch() {
  return (
    <div>
      
      <div className="absolute -z-20">
        <img
          alt="bg imag"
          src={BG_URL}
          aria-hidden="true"
          className="default-ltr-cache-19j6xtr"
        ></img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    
      
    </div>
  )
}

export default GptSearch
