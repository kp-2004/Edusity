import React from 'react'
import './about.css'
import campus from '../../assets/campus.jpg'
import play from '../../assets/play.png'

function About() {
    return (
        <div className='about' id='About'>
            <div className='about-left'>
                <img src={campus} className='about-img' />
                <img src={play} className='play-img' />
            </div>
            <div className='about-right'>
                <h3>About University</h3>
                <h2>Nurturing Tommorow Leader's Today</h2>
                <p>The modern Western university evolved from the medieval schools known as studia
                    generalia; they were generally recognized places of study open to students from all parts of Europe. </p>
                <p> The earliest studia arose out of efforts to educate clerks and monks beyond the level of the cathedral and monastic schools.</p>
                <p>The inclusion of scholars from foreign countries constituted the primary difference between the studia and the schools from which they grew.

                </p>
               
            </div>
        </div>
    )
}

export default About
