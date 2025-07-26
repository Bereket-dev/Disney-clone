import React, { useEffect, useRef, useState } from 'react'
import { fetchTrendingMovies, IMAGE_BASE_URL } from '../api/tmdb'
import RightAngleIcon from '../assets/icons/chevron-right.svg'
import LeftAngleIcon from '../assets/icons/chevron-left.svg'

function Slider() {
  const elementRef = useRef()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [movies, setMovies] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies()
        setMovies(data.slice(0, 5))
      } catch (err) {
        console.error(err)
      }
    }
    getMovies()
  }, [])

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }

  useEffect(() => {
    if (isHovered || !elementRef.current) return

    const interval = setInterval(() => {
      sliderLeft(elementRef.current)
    }, 5000)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group scrollbar-hide flex h-[200px] w-full overflow-x-auto scroll-smooth px-16 py-4 md:h-[315px]"
      ref={elementRef}
    >
      {movies.map((movie) => (
        <img
          key={movie.id}
          src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
          className="mr-5 w-full flex-shrink-0 rounded-lg object-cover object-left-top hover:border-2 hover:border-gray-200/70"
        />
      ))}
      <div
        onClick={() => sliderLeft(elementRef.current)}
        className="absolute top-[220px] left-4 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 group-hover:block"
      >
        <img src={LeftAngleIcon} alt="left angle icon" />
      </div>
      <div
        onClick={() => sliderRight(elementRef.current)}
        className="absolute top-[220px] right-4 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 group-hover:block"
      >
        <img src={RightAngleIcon} alt="right angle icon" />
      </div>
    </div>
  )
}

export default Slider
