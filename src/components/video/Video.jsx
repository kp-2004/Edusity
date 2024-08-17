import React from 'react'
import './video.css'

function Video() {
  return (
    <div className='videoplayer'>
      <video src={<iframe width="315" height="560" src="https://www.youtube.com/embed/mzjVHaS7aBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} 
      autoPlay muted controls/>
    </div>
  )
}

export default Video
