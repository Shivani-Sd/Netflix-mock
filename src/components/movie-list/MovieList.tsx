import { FC, useEffect, useRef, useState } from "react";


import { ReactComponent as LeftIcon } from "/home/shivani/my-netflix/src/assets/left-arrow.svg";
import { ReactComponent as RightIcon } from "/home/shivani/my-netflix/src/assets/right-arrow.svg";

import MovieCard from "../movie-card/MovieCard";

type MovieListProps = {
  listTitle: string;
  searchKey: string;
};

const MovieList: FC<MovieListProps> = ({ listTitle, searchKey }) => {
  const [movieList, setMovieList] = useState<any>();
  const contentWrapper = useRef<HTMLUListElement>(null);

  const [arrowDisable, setArrowDisable] = useState(true);
  const [viewArrow, setViewArrow] = useState(false);

  const setArrow = (element: HTMLUListElement | null) => {
    if (element !== null) {
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }
  };

  const sideScroll = (
    element: HTMLUListElement | null,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (element !== null) {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
        setArrow(element);
      }
    }, speed);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${searchKey}?api_key=c88a7d7836958f45aa4a41300b1c6496&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
      });
  }, [searchKey]);

  return (
    <div className="relative bottom-[30px] max-h-[175px] ml-[50px] mr-[50px]" onMouseOver={()=>{setArrow(contentWrapper.current); setViewArrow(true)}} onMouseLeave={()=>setViewArrow(false)}>
      <div className="text-white lg:text-[24px] mb:text-[20px] ml-[10px]">{listTitle}</div>
      <div className="relative">
        <ul
          className="flex overflow-x-scroll overflow-y-hidden scrollbar pt-[10px] ml-[7px] absolute top-0 left-0 max-w-full"
          ref={contentWrapper}
          onMouseOver={() => setArrow(contentWrapper.current)}
        >
          {movieList?.results.map((movie: any, index: number) => {
            return (
              <li className="2xl:min-w-[16.67%] xl:min-w-[18%] lg:min-w-[21%] md:min-w-[28%] sm:min-w-[34%]">
                <MovieCard
                  movieName={movie?.original_name ?? movie?.title}
                  index={index}
                  moviePoster={movie?.backdrop_path}
                  isWatching={listTitle==="Continue Watching for User"?true:false}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="xl:w-[102%] md:w-[104%] sm:w-[106%] sm:mt-[50px] md:mt-[55px] lg:mt-[64px] xl:mt-[85px] flex justify-between absolute top-0 left-0">
          <div className="relative right-[20px] top-[35px]">
           {!arrowDisable && <LeftIcon
              onClick={() => sideScroll(contentWrapper.current, 25, 1375, -50)}
              className={`${viewArrow?"fill-white":"fill-transparent"}`}
            />}
          </div>
          <div
            className="relative top-[35px]"
          >
            <RightIcon
              onClick={() => sideScroll(contentWrapper.current, 25, 1375, 50)}
              className={`${viewArrow?"fill-white":"fill-transparent"}`}
            />
          </div>
        </div>
    </div>
  );
};

export default MovieList;
