import { FC } from "react";

import { ReactComponent as SearchIcon } from "../../../src/assets/Search.svg";
import { ReactComponent as BellIcon } from "../../../src/assets/bell.svg";

type NavBarProps = {
  scroll: number;
};

const Navbar: FC<NavBarProps> = ({ scroll }) => {
  return (
    <nav
      className={`px-2 h-16 flex items-center w-full justify-between fixed z-[500] !font-netflix ${
        scroll > 0
          ? "bg-[#141414]"
          : "transition-all duration-1000 ease-out bg-gradient-to-b from-black to-grey"
      }`}
    >
      <div className="flex justify-between w-[40%] min-w-[630px] ml-[30px]">
        <img
          src="Netflix-logo.png"
          className="object-scale-down w-28 pl-5"
          alt="Netflix Logo"
        />
        <div className="flex justify-between w-full min-w-[500px] ml-[20px]">
          <div className="w-full">
            <ul className="flex justify-evenly list-none text-white text-[14px] items-center overflow-hidden">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">TV Shows</li>
              <li className="cursor-pointer">Movies</li>
              <li className="cursor-pointer">New &#38; Popular</li>
              <li className="cursor-pointer">My List</li>
              <li className="cursor-pointer">Browse by Languages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[7%] min-w-[120px]">
        <ul className="text-white text-[14px] flex justify-between">
          <li className="cursor-pointer">
            <SearchIcon />
          </li>
          <li className="cursor-pointer">Children</li>
          <li className="cursor-pointer">
            <BellIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
