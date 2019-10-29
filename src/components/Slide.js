import React from 'react'

import './Slide.css'

export default function Slide({ image }) {
  return (
    <div className="slide">
      <div className="slide__img-container">
        <img src={image} alt="" />
      </div>
    </div>
  )
}
