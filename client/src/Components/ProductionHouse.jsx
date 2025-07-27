import React from 'react'
//images
import disney from '../assets/images/disney.jpg'
import marvel from '../assets/images/marvel.jfif'
import nationalG from '../assets/images/national_geography.jpg'
import pixar from '../assets/images/pixar.jfif'
import starWars from '../assets/images/star_wars.jfif'
//videos
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGV from '../assets/videos/na_geography.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starWarsV from '../assets/videos/star_wars.mp4'

function ProductionHouse() {
  const List = [
    { id: 1, image: disney, video: disneyV, label: 'disney' },
    { id: 2, image: marvel, video: marvelV, label: 'marvel' },
    { id: 3, image: nationalG, video: nationalGV, label: 'national geography' },
    { id: 4, image: pixar, video: pixarV, label: 'pixar' },
    { id: 5, image: starWars, video: starWarsV, label: 'star wars' },
  ]
  return (
    <div className="flex w-full justify-between gap-2 px-6 py-2 md:gap-5 md:px-16">
      {List.map((item) => (
        <div
          key={item.id}
          className="group relative cursor-pointer rounded-md transition-all duration-200 ease-in hover:scale-110 hover:border-2 hover:border-gray-400/50"
        >
          <img
            src={item.image}
            alt={`${item.label} image`}
            className="w-full rounded-md"
          />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 left-0 h-full w-full rounded-md object-cover opacity-0 group-hover:z-10 group-hover:opacity-100 group-focus:z-10 group-focus:opacity-100 group-active:z-10 group-active:opacity-100"
          />
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
