import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div className='slider-container'>
    <Carousel>
      <Carousel.Item interval={5000}>
        <img src="images/html.png" alt="" />
      </Carousel.Item>
      
      <Carousel.Item interval={5000}>
        <img src="images/javascript.png" alt="" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img src="images/react.png" alt="" />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img src="images/frontend react.png" alt="" />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Slider