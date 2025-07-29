import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import VideoTitle from './VideoTitle'
import VideoBG from './VideoBG'

function MainContainer() {

    const movie = useSelector(store => store.movies?.nowPlayingMovie);
    console.log()

    if (!movie || movie.length === 0) return null;

    const mainMove = movie[0];
    // console.log(mainMove, 'jh'); // This will show the actual object
  return (
    <div>
        <h2>{mainMove.Title} ({mainMove.Year})</h2>
            {/* <img src={mainMove.Poster} alt={mainMove.Title} width={200} /> */}
        <VideoTitle  mainMove={mainMove} />
        <VideoBG mainMove={mainMove}/>
      
    </div>
  )
}

export default MainContainer
