import disneyLogo from '../assets/icons/disney_logo.svg'
import houseIcon from '../assets/icons/house-fill.svg'
import searchIcon from '../assets/icons/search.svg'
import plusIcon from '../assets/icons/plus-lg.svg'
import starIcon from '../assets/icons/star-fill.svg'
import moviesIcon from '../assets/icons/film.svg'
import seriesIcon from '../assets/icons/camera-reels-fill.svg'
import threeDotIcon from '../assets/icons/three-dots-vertical.svg'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { icon: houseIcon, label: 'home' },
    { icon: searchIcon, label: 'search' },
    { icon: plusIcon, label: 'watchlist' },
    { icon: starIcon, label: 'originals' },
    { icon: moviesIcon, label: 'movies' },
    { icon: seriesIcon, label: 'series' },
  ]
  return (
    <header className="bg-transparent text-xs font-normal text-white">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-3">
        <div className="me-12">
          <img
            src={disneyLogo}
            alt="disney logo"
            className="h-full w-20 rounded-lg"
          />
        </div>
        <nav className="flex gap-6">
          {/* Desktop / Nav Items */}
          {navItems.map(({ icon, label }, index) => {
            if (index < navItems.length - 3)
              return (
                <a
                  key={label}
                  href="#"
                  className="flex items-center justify-center gap-2 border-b-2 border-transparent uppercase underline-offset-4 transition-all duration-300 hover:border-white hover:underline focus:border-white active:border-white md:border-none"
                >
                  <img src={icon} alt={`${label} icon`} className="w-[12px]" />
                  <span className="hidden md:inline-block">{label}</span>
                </a>
              )
            else {
              return (
                <a
                  key={label}
                  href="#"
                  className="hidden items-center justify-center gap-2 border-b-2 border-transparent uppercase underline-offset-4 transition-all duration-300 hover:border-white hover:underline focus:border-white active:border-white md:flex md:border-none"
                >
                  <img src={icon} alt={`${label} icon`} className="w-[12px]" />
                  <span className="inline-block">{label}</span>
                </a>
              )
            }
          })}

          {/* Mobile dropdown menu / Nav Items */}
          <div
            onMouseLeave={() => setMenuOpen(false)}
            className="relative inline-block md:hidden"
          >
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative">
              <img
                src={threeDotIcon}
                alt="three dot icon"
                className="hover:opacity-70"
              />
            </button>
            {menuOpen && (
              <div className="absolute top-[20px] left-0 z-50 flex w-max min-w-[150px] flex-col justify-center rounded-sm border border-gray-600 bg-gray-950 md:inline-flex md:flex-row md:p-0">
                {navItems.slice(-3).map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center gap-2 px-4 py-3 uppercase transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-900"
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
            className="h-10 w-10 rounded-full bg-white"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
