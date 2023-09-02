import { FC, useEffect, useRef, useState } from "react";

import { ReactComponent as LeftIcon } from "../../../src/assets/left-arrow.svg";
import { ReactComponent as RightIcon } from "../../..//src/assets/right-arrow.svg";

import MovieCard from "../movie-card/MovieCard";
import { useGetTopRatedMoviesQuery } from "../../services/topRatedMovies";

type MovieListProps = {
  listTitle: string;
  searchKey: string;
};

const MovieList: FC<MovieListProps> = ({ listTitle, searchKey }) => {
  const contentWrapper = useRef<HTMLUListElement>(null);

  const [arrowDisable, setArrowDisable] = useState(true);
  const [viewArrow, setViewArrow] = useState(false);
  const [viewExplore, setViewExplore] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  const [skip, setSkip] = useState(true);

  const { data: movieList } = useGetTopRatedMoviesQuery(searchKey, {
    skip,
  });

  useEffect(() => {
    if (searchKey) setSkip(false);
  }, [searchKey]);

  return (
    <div
      className="relative bottom-[30px] max-h-[175px] ml-[50px] mr-[50px]"
      onMouseOver={() => {
        setArrow(contentWrapper.current);
        setViewArrow(true);
      }}
      onMouseLeave={() => setViewArrow(false)}
    >
      <div
        className="text-white lg:text-[24px] mb:text-[20px] ml-[10px] flex w-full relative items-center"
        onMouseOver={() => {
          setViewExplore(1);
          setAnimate(false);
        }}
        onMouseLeave={() => {
          setAnimate(true);
          setTimeout(() => {
            setViewExplore(2);
          }, 500);
        }}
      >
        <div>{listTitle}</div>
          <div className={`flex`}>
            <div
              className={`text-[#06b6d4] text-[15px] ${
                viewExplore===2 ? "animate-slide-onto-left opacity-0" : viewExplore ===1? "animate-slide-into-left" : "opacity-0"
              }`}
            >
              Explore All
            </div>
            <RightIcon
              className={`fill-cyan-500 w-[10%] h-[25px] ${
                viewExplore===2 ? "animate-slide-onto-left-max opacity-0" : viewExplore ===1? "animate-slide-into-left-max" :"opacity-0"
              }`}
            />
          </div>
      </div>
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
                  isWatching={
                    listTitle === "Continue Watching for User" ? true : false
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="xl:w-[102%] md:w-[104%] sm:w-[106%] sm:mt-[50px] md:mt-[55px] lg:mt-[64px] xl:mt-[85px] flex justify-between absolute top-0 left-0">
        <div className="relative right-[20px] top-[35px]">
          {!arrowDisable && (
            <LeftIcon
              onClick={() => sideScroll(contentWrapper.current, 25, 1375, -50)}
              className={`${viewArrow ? "fill-white" : "fill-transparent"}`}
            />
          )}
        </div>
        <div className="relative top-[35px]">
          <RightIcon
            onClick={() => sideScroll(contentWrapper.current, 25, 1375, 50)}
            className={`${viewArrow ? "fill-white" : "fill-transparent"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
