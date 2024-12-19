import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../slider.css'




const TestimonialCarousel = ({ slider }) => {
  return <Carousel showThumbs={false} showStatus={false} showIndicators={false}
  autoPlay={false}
  infiniteLoop={true}
  >
    {slider.map((item, index) =>{

      const {image, subtitle, message, name, occupation} = item;
      return <div className='max-w-[840px] mx-auto'>
<div className="text-3xl text-red-500 lg:text-5xl font-bold">{subtitle}</div>
        <div >{message}</div>
        <div className='max-w[100px] lg:max-w-[150px] mx-auto mb-3'>
          <img style={{height: '150px', width: '150px'}} src={image} alt='' />

        </div>
<div>{name}</div>
<div>{occupation}</div>
      </div>
    })}
  </Carousel>;
};

export default TestimonialCarousel;
