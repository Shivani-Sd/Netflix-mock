import { FC, useEffect, useState } from "react";

import MovieDetails from "../movie-details/MovieDetails";

type MovieCardProps = {
  movieName: string;
  index: number;
  moviePoster: any;
  isWatching: boolean;
};

const MovieCard: FC<MovieCardProps> = ({
  movieName,
  index,
  moviePoster,
  isWatching,
}) => {
  const [isView, setView] = useState(false);
  const [key, setKey] = useState("");

  const handleHoverOn = () => {
    setView(true);
  };
  const handleHoverOff = () => {
    setView(false);
  };

  useEffect(() => {
    setKey(`https://image.tmdb.org/t/p/w500/${moviePoster}`)
  }, [ moviePoster ]);

  return (
    <div onMouseOver={handleHoverOn} className="relative z-100">
      {isView ? (
        <div onMouseLeave={handleHoverOff} className="relative z-50">
          <MovieDetails
            movieName={movieName}
            movieTrailer={key}
            index={index}
            isWatching={isWatching}
          />
        </div>
      ) : (
        <div className="ml-[5px] mr-[5px]">
          <img
            src={key}
            alt={`${movieName} trailer`}
            className="rounded object-fit-cover"
          ></img>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
