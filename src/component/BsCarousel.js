import React from 'react'
import './BsCarousel.css'
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function BsCarousel() {
  return (
    <div>
        
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hero-img-01.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button className='bsc__btn1' variant="outline-light" size="lg">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hero-img-02.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button className='bsc__btn' variant="outline-light" size="lg">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="hero-img-03.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <Button className='bsc__btn' variant="outline-light" size="lg">Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
