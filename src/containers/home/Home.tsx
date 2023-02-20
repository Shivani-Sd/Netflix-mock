import { useEffect, useState } from "react";


import { ReactComponent as PlayIcon } from "/home/shivani/my-netflix/src/assets/Play.svg";
import { ReactComponent as InfoIcon } from "/home/shivani/my-netflix/src/assets/Info.svg";

import Navbar from "../../components/navbar/Navbar";
import MovieList from "../../components/movie-list/MovieList";

const Home = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black min-h-[100vh]">
      <Navbar scroll={offset} />
      <div className="w-full h-[787px]">
        <div>
          <img
            src="video-placeholder.jpg"
            alt="video placeholder"
            className="w-full object-cover h-[787px]"
          />
          <div className="bg-gradient-to-b from-[#887e7e00] to-black h-[32px] w-full relative bottom-[32px]"></div>
        </div>
        <div className="relative bottom-[200px] left-[60px] flex justify-between w-[19%] lg:min-w-[350px] md:min-w-[290px] sm:min-w-[290px]">
          <button
            type="button"
            className="bg-white hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex lg:px-8 lg:pt-[12px] lg:pb-[9px] md:px-5 md:pt-[11px] md:pb-[8px] sm:px-5 sm:pt-[11px] sm:pb-[8px]"
          >
            <PlayIcon className="lg:w-7 md:w-5 sm:w-5"/>
            <p className="ml-[5px] lg:text-[23px] md:text-[20px] sm:text-[20px]">Play</p>
          </button>
          <button
            type="button"
            className="bg-[#6d6d6eb3] pt-[10px] pb-[11px] hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex pl-[21px] pr-[25px] opacity-80"
          >
            <InfoIcon className="lg:w-9 md:w-7 sm:w-7"/>
            <p className="ml-[5px] text-white lg:text-[23px] md:text-[20px] sm:text-[20px]">More Info</p>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="2xl:mb-[220px] mt-[-37px] xl:mb-[200px] md:mb-[160px] lg:mb-[190px] sm:mb-[120px]">
          <MovieList
            searchKey="movie/popular"
            listTitle="Continue Watching for User"
          />
        </div>
        <div className="2xl:mb-[220px] xl:mb-[200px] md:mb-[160px] lg:mb-[190px] sm:mb-[120px]">
          <MovieList
            searchKey="movie/top_rated"
            listTitle="Top Rated Movies"
          />
        </div>
        <div className="2xl:mb-[270px] xl:mb-[200px] md:mb-[160px] lg:mb-[190px] sm:mb-[120px]">
          <MovieList
            searchKey="tv/popular"
            listTitle="Popular TV Shows"
          />
        </div>
        <div className="2xl:mb-[270px] xl:mb-[200px] md:mb-[160px] lg:mb-[190px] sm:mb-[120px]">
          <MovieList
            searchKey="tv/top_rated"
            listTitle="Recommended TV Shows"
          />
        </div>
        <div className="2xl:mb-[270px] xl:mb-[200px] md:mb-[160px] lg:mb-[190px] sm:mb-[120px]">
          <MovieList
            searchKey="movie/upcoming"
            listTitle="Upcoming Movies"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
