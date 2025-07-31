import React from "react";
import MovieCard from "./MoveCard";

function MovieList({ title, movie }) {
  if (!movie) return;

  return (
    <div className="p-6  text-white">
      {" "}
      <div>
        <h1 className="text-3xl  py-4 bold ">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll  no-scrollbar">
        <div className="flex ">
          {" "}
          {movie.map((e, i) => (
            <MovieCard key={i} />
          ))}
        </div>
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieList;
