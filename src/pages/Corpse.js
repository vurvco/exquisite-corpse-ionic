import React from 'react'

import images from '../images'

import Slider from '../components/Slider'

export default function Corpse() {
  return (
    <div>
      <Slider images={images.head} />
      <Slider images={images.body} />
      <Slider images={images.legs} />
    </div>
  )
}
