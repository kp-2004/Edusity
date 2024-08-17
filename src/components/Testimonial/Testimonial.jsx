import React, { useRef } from 'react'
import './testimonial.css'
import next from '../../assets/next.png';
import previous from '../../assets/previous.png'
import tes1 from '../../assets/tes1.png'
import tes2 from '../../assets/tes2.jpg'
import tes3 from '../../assets/tes3.jpg'
import tes4 from '../../assets/program-3.jpg'

function Testimonial() {

  const slider = useRef();
  let tx = 0;

  const slideforword = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slidebackword =() =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonial' id='Testimonial'>
      <img src={next} height={50} width={50} className='next-btn' onClick={slideforword}/>
      <img src={previous} height={50} width={50} className='prev-btn' onClick={slidebackword}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={tes1}/>
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, USA</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={tes2}/>
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, USA</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={tes3}/>
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, USA</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={tes4}/>
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, USA</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                      type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
