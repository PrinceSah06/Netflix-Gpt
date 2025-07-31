import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movie = useSelector(store => store.movies.nowPlayingMovie)
  return (
    <div className=' bg-black  '>
     <div className='relative z-20 pl-12  -mt-50'> 
      <MovieList title={'Now Playing'} movie = {movie}/>
      <MovieList title={'Now Tranding'} movie = {movie}/>
      <MovieList title={'New'} movie = {movie}/>
      <MovieList title={'Most viewed'} movie = {movie}/>
      <MovieList title={'Comedy'} movie = {movie}/></div>
    </div>
  )
}

export default SecondaryContainer
