import { FC, useState } from "react";

import { ReactComponent as DownIcon } from "../../../src/assets/downward.svg";
import { ReactComponent as AddIcon } from "../../../src/assets/add.svg";
import { ReactComponent as CheckIcon } from "../../../src/assets/check.svg";
import { ReactComponent as PlayIcon } from "../../../src/assets/play.svg";
import { ReactComponent as CrossIcon } from "../../../src/assets/cross.svg";

import { VideoSeekSlider } from "react-video-seek-slider";
import "react-video-seek-slider/styles.css";

type MovieDetailsProps = {
  movieTrailer: any;
  movieName: string;
  index: number;
  isWatching: boolean;
};

const MovieDetails: FC<MovieDetailsProps> = ({
  movieTrailer,
  movieName,
  index,
  isWatching,
}) => {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div
      className={`transition-all duration-[300ms] ease-in-out mr-[5px] hover:scale-[1.2] ${
        index === 0 ? "ml-[34px]" : "ml-[5px]"
      }`}
    >
      <img
        src={movieTrailer}
        alt={`${movieName} trailer`}
        className="rounded"
      />
      <div className="bg-[#141414] flex flex-col pb-[80px] justify-between h-[155px]">
        <div className="flex justify-between">
          <div className="flex pt-[10px]">
            <div className="ml-[5px]">
              <PlayIcon />
            </div>
            {window.innerWidth > 790 && (
              <div className="pt-[1px] mr-[3px]">
                <AddIcon />
              </div>
            )}
            {window.innerWidth > 1000 && (
              <div className="pt-[1px] mr-[3px]">
                <CheckIcon />
              </div>
            )}
            {window.innerWidth > 1290 && (
              <div className="pt-[1px]">
                <CrossIcon />
              </div>
            )}
          </div>
          <div>
            <DownIcon />
          </div>
        </div>
        {isWatching ? (
          <div className="flex justify-between w-[90%] ml-4">
            <div className="lg:w-3/4 md:w-2/3 sm:w-3/5">
              <VideoSeekSlider
                max={1152000}
                currentTime={currentTime}
                bufferTime={400000}
                onChange={setCurrentTime}
                secondsPrefix="00:00:"
                minutesPrefix="00:"
              />
            </div>
            <div className="text-[grey] font-medium">0 of 2h</div>
          </div>
        ) : (
          <div className="text-white ml-4 mr-4">{movieName}</div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
