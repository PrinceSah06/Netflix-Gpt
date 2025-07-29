import React from "react";

function VideoBG({ mainMove }) {
  //  const  {Title,Year,Type} = mainMove
  if (!mainMove) return null;
  return (
    <>
      <iframe className=" w-screen  aspect-video"
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/vZ734NWnAHA?si=nnH-sryqiUXIwzc7 ?rel=0&end=66  ?&autoplay=1&mute=1"
        title="YouTube video player"
        // frameBorder="0",
       
        referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
    </>
  );
}
// https://api.themoviedb.org/3/movie/976573/videos?language=en-US
export default VideoBG;
