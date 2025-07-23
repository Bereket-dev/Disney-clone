import disneyLogo from "../assets/icons/disney_logo.svg";
import houseIcon from "../assets/icons/house-fill.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/plus-lg.svg";
import starIcon from "../assets/icons/star-fill.svg";
import moviesIcon from "../assets/icons/film.svg";
import seriesIcon from "../assets/icons/camera-reels-fill.svg";
import threeDotIcon from "../assets/icons/three-dots-vertical.svg";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { icon: houseIcon, label: "home" },
    { icon: searchIcon, label: "search" },
    { icon: plusIcon, label: "watchlist" },
    { icon: starIcon, label: "originals" },
    { icon: moviesIcon, label: "movies" },
    { icon: seriesIcon, label: "series" },
  ];
  return (
    <header className="bg-black text-white text-xs font-normal ">
      <div className=" flex items-center px-6 py-3 max-w-6xl mx-auto">
        <div className="me-12">
          <img src={disneyLogo} alt="disney logo" className="w-20 h-full" />
        </div>
        <nav className="flex gap-6">
          {/* Desktop / Nav Items */}
          {navItems.map(({ icon, label }, index) => {
            if (index < navItems.length - 3)
              return (
                <a
                  key={label}
                  href="#"
                  className="uppercase flex items-center justify-center gap-2 hover:underline underline-offset-4 md:border-none  border-transparent border-b-2 hover:border-white focus:border-white active:border-white transition-all duration-300"
                >
                  <img src={icon} alt={`${label} icon`} className="w-[12px]" />
                  <span className="hidden md:inline-block">{label}</span>
                </a>
              );
            else {
              return (
                <a
                  key={label}
                  href="#"
                  className="uppercase hidden md:flex items-center justify-center gap-2 hover:underline underline-offset-4 md:border-none  border-transparent border-b-2 hover:border-white focus:border-white active:border-white transition-all duration-300"
                >
                  <img src={icon} alt={`${label} icon`} className="w-[12px]" />
                  <span className="inline-block">{label}</span>
                </a>
              );
            }
          })}

          {/* Mobile dropdown menu / Nav Items */}
          <div
            onMouseLeave={() => setMenuOpen(false)}
            className="inline-block md:hidden relative"
          >
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative">
              <img
                src={threeDotIcon}
                alt="three dot icon"
                className="hover:opacity-70"
              />
            </button>
            {menuOpen && (
              <div className="flex flex-col md:inline-flex md:flex-row rounded-sm w-max min-w-[150px] justify-center  md:p-0 bg-gray-950 border border-gray-600 absolute top-[20px] left-0 ">
                {navItems.slice(-3).map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="uppercase px-4 py-3 flex items-center gap-2 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900 transition-all duration-200"
                  >
                    <img
                      src={icon}
                      alt={`${label} icon`}
                      className="w-[12px]"
                    />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="ms-auto">
          <img
            src="https://via.placeholder.com/40"
            alt="profile img"
            className="rounded-full bg-white w-10 h-10"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
