import React, { useEffect, useState } from 'react'
import { fetchMoviesByGenre, IMAGE_BASE_URL } from '../api/index'
import MovieCard from './MovieCard'

function GenreSlider({ genreId, title }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchMoviesByGenre(genreId)
        setMovies(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    load()
  }, [genreId])

  return (
    <div className="w-full px-4 py-8 md:px-16">
      <h2 className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize">
        {title}
      </h2>
      <div className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            image_src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  )
}

export default GenreSlider
