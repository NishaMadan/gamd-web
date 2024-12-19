import React from 'react';

import TestimonialCarousel from '../components/TestimonialCarousel';

import { testimonialData } from '../data';

// import {motion} from 'framer-motion';

// import {fadeIn} from '../variants';

const Testimonial = () => {

  const{ title, modelImg, slider } = testimonialData;

  return <section className='relative  z-10 h-[800px] pt-[60px] md:pt-[120px]'>
 <div className='container mx-auto'>

              <div className='text-center capitalize flex flex-col items-center'>
            <h2 className='h2 text-red'>{title}</h2>
       
            <div className='mb-12'>
              <img src={modelImg} />
            </div>

  </div>


  <div>
    <TestimonialCarousel slider={slider} />
  </div>

 </div>

  </section>;
};

export default Testimonial;
