import React from 'react'
import './campus.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import arrow from '../../assets/arrow.png'

function Campus() {
  return (
    <div className='campus' id='Campus'>
      <div className='gallery'>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
      </div>
      <button className='btn dark-btn'>See More here<img src={arrow} height={30} width={30}/></button>
    </div>
  )
}

export default Campus
