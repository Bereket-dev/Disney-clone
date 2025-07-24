import React, { useEffect, useState } from 'react'
import Slider1 from '../assets/images/slider_1.png'
import Slider2 from '../assets/images/slider_2.png'
import Slider3 from '../assets/images/slider_3.png'
import RightAngleIcon from '../assets/icons/chevron-right.svg'
import LeftAngleIcon from '../assets/icons/chevron-left.svg'

function Slider() {
  const sliders = [
    { image: Slider1, label: 'slider 1' },
    { image: Slider2, label: 'slider 2' },
    { image: Slider3, label: 'slider 3' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const prevIndex = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliders.length - 1 : prev - 1))
  }

  const nextIndex = () => {
    setCurrentIndex((prev) => (prev + 1) % sliders.length)
  }

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      nextIndex()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isHovered])

  return (
    <div className="relative h-[200px] w-full px-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group mx-auto flex h-full w-[80%] gap-3"
      >
        {sliders.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.label}
            className="w-full flex-shrink-0 overflow-hidden object-cover transition-transform duration-700 ease-in-out"
            style={{ transform: `translatex(-${currentIndex * 100}%)` }}
          />
        ))}
        <div
          onClick={prevIndex}
          className="absolute top-1/2 left-4 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 group-hover:block"
        >
          <img src={LeftAngleIcon} alt="left angle icon" />
        </div>
        <div
          onClick={nextIndex}
          className="absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-full bg-black/50 p-2 group-hover:block"
        >
          <img src={RightAngleIcon} alt="right angle icon" />
        </div>
      </div>
    </div>
  )
}

export default Slider
