import React, { useEffect, useState } from 'react'
import { fetchGenreList } from '../api/index'
import GenreSlider from './GenreSlider'

function MovieGenres() {
  const [genreList, setGenreList] = useState([])
  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenreList()
        setGenreList(data)
      } catch (error) {
        console.error(error.message)
      }
    }
    getGenres()
  }, [])
  return (
    <div>
      {genreList.map((genre) => (
        <GenreSlider
          key={genre.id}
          genreId={genre.id}
          title={genre.name}
          className="my-6"
        />
      ))}
    </div>
  )
}

export default MovieGenres
