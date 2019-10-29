import React, { useRef, useEffect } from 'react'
import Hammer from 'hammerjs'

import './Slider.css'

import Slide from './Slide'

export default function Slider({ images }) {
  const sliderRef = useRef()
  useEffect(() => {
    if (sliderRef.current) {
      console.log('Yep')
      const manager = new Hammer.Manager(sliderRef.current)
      const swipe = new Hammer.Swipe()
      manager.add(swipe)

      manager.on('swipe', console.log)
    }
  })

  return (
    <div className="slider" ref={sliderRef}>
      {
        images.map(image => (
          <Slide image={image} key={image} />
        ))
      }
    </div>
  )
}
