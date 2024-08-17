import React from 'react'
import './program.css';
import program1 from '../../assets/program-1.jpg'
import program2 from '../../assets/program-2.jpg'
import program3 from '../../assets/program-3.jpg'
import user from '../../assets/user.png';

function Program() {
  return (
    <div className='programs' id='Program'>
        <div className='program'>
            <img src={program1}/>
            <div className='caption'>
                <img src={user}/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2}/>
            <div className='caption'>
                <img src={user}/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3}/>
            <div className='caption'>
                <img src={user}/>
                <p>Post Graduation</p>
            </div>
        </div>     
    </div>
  )
}

export default Program
