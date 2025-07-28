const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

// front-end api key
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

//trending movies
export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  )
  if (!response.ok) throw new Error('Failed to fetch')

  const data = await response.json()
  return data.results
}
// movie by genre
export const fetchMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  )
  if (!response.ok) throw new Error('Failed to fetch')

  const data = await response.json()
  return data.results
}

export const fetchGenreList = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  )
  if (!response.ok) throw new Error('Failed to fetch')
  const data = await response.json()
  return data.genres
}

export { IMAGE_BASE_URL }
