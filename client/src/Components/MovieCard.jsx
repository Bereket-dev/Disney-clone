import React from 'react'

function MovieCard({ image_src, title }) {
  return (
    <div className="group mr-5 w-[300px] flex-shrink-0 overflow-hidden">
      <div className="relative h-[200px] w-full overflow-hidden rounded-md">
        <img
          src={image_src}
          alt={`${title} image`}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 hover:scale-110"
        />
      </div>
      <h3 className="mt-2 text-sm font-light text-white capitalize">{title}</h3>
    </div>
  )
}

export default MovieCard
