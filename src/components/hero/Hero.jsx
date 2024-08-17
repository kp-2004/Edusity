import React from 'react'
import './hero.css'
import arrow from '../../assets/arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for better world</h1>
            <p>Our mission is to provide quality education to all students and to make them successful in their carrer.
                </p>
                <button className='btn'> Explore More <img src={arrow} height={30} width={30}/> </button>
        </div>
      
    </div>
  )
}

export default Hero
