import disneyLogo from "../assets/icons/disney_logo.svg";
import HouseIcon from "../assets/icons/house-fill.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/plus-lg.svg";
import moviesIcon from "../assets/icons/film.svg";
import seriesIcon from "../assets/icons/camera-reels-fill.svg";

function Header() {
  return (
    <header className="bg-black text-white text-xs font-normal ">
      <div className=" flex items-center px-6 py-3 max-w-6xl mx-auto">
        <div className="me-12">
          <img src={disneyLogo} alt="disney logo" className="w-20 h-full" />
        </div>
        <nav className="flex gap-6 list-none">
          <li className="uppercase flex items-center justify-center gap-2">
            <img src={HouseIcon} alt="house icon" className="w-[12px]" />
            Home
          </li>
          <li className="uppercase flex items-center justify-center gap-2">
            <img src={searchIcon} alt="search icon" className="w-[12px]" />
            search
          </li>
          <li className="uppercase flex items-center justify-center gap-2">
            <img src={plusIcon} alt="plus icon" className="w-[12px]" />
            watchlist
          </li>
          <li className="uppercase flex items-center justify-center gap-2">
            <img src={moviesIcon} alt="film icon" className="w-[12px]" />
            movies
          </li>
          <li className="uppercase flex items-center justify-center gap-2">
            <img src={seriesIcon} alt="camera reel icon" className="w-[12px]" />
            series
          </li>
        </nav>
        <div className="ms-auto">
          <img
            src="#"
            alt="profile img"
            className="rounded-full bg-white w-10 h-10"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
