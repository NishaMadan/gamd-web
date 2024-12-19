import React, { useState, useEffect } from "react";
import { aboutData } from "../data";
import '../styles/slider.css';
import image from '../assets/image/About-Us-uai-2880x1507.png';
const groupedData = {
  Management: aboutData.slice(0, 3),
  CoreTeam: aboutData.slice(3, 8),
  Crew: aboutData.slice(8, 9),
};

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100" style={{padding: '20px'}}>
      <div className="container mx-auto">
        {/* New Section Before Management */}
        <div className="container" style={{ width: '100%', marginTop:'10px' }}>
  <div className="row">
    {/* Image Column */}
    <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
      <div className="overflow-hidden">
        <p
          className="mb56 mb-xs-24 About_Sec1_Content"
          style={{ marginBottom: '14%', fontSize: '30px', letterSpacing: '2px', lineHeight: '47px' }}
        >
          GA Morgan is a subsidiary of Morgan Tecnica Spa, Italy, incorporated in 2008 as a 100%
          independent self-operated Indian Private Limited Company.
        </p>
        <img
          alt="Pic"
          className="Aboutdetails_sec1_img"
          src={image} // Replace `image` with the actual image source
          style={{ width: '30%' }}
        />
      </div>
    </div>

    {/* Text Column */}
    <div className="col-md-6 col-sm-12">
      <div className="text-center">
        <i className="ti-quote-left icon icon-sm mb16" style={{ color: 'red' }}></i>
        <h4 className="mb32 text-black">
          GA Morgan is a team of highly
          qualified, decade-experienced professionals and engineers serving more than 500+ customers
          in India, Bangladesh, Sri Lanka, and the Middle East Market.
        </h4>
        <p>
          The focus of the main business is to promote, install, train, implement, and provide spare
          parts service for Morgan Tecnica products, later started manufacturing allied equipment
          and material handling systems in the name of ‘Essentials,’ made in India for the Indian market.
          GA Morgan automates the entire pre-sew process from Designing, product development,
          sampling, costing, material handling, loading, spreading, pinning, labelling, cutting, and
          parts inspection. Today, GA Morgan is the market leader with its 45+ team professionals,
          Morgan Industrial Training Centre, Centralized parts warehouse, direct service centers at
          Bangalore, Delhi, Kolkata, Ludhiana, Tirupur, Ahmedabad, and Mumbai.                                           
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Previous Content */}
<div style={{padding: '30px'}}>

        {/* Management Section */}
        <h2 className="text-4xl text-black font-bold text-center mb-6 uppercase">Management</h2>
        <Carousel data={groupedData.Management} showArrows={true} />

        {/* Core Team Section */}
        <h2 className="text-4xl text-black font-bold text-center mt-12 mb-6 uppercase">Core Team</h2>
        <Carousel data={groupedData.CoreTeam} showArrows={true} />

        {/* Crew Section */}
        <h2 className="text-4xl text-black font-bold text-center mt-12 mb-6 uppercase">Crew</h2>
        <Carousel data={groupedData.Crew} showArrows={false} imageSize="large" />
      </div>

      </div>
    </section>
  );
};

const Carousel = ({ data, showArrows, imageSize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Auto-Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [data.length]);

  // Handle Slide Change (Next and Previous)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Set image size based on imageSize prop
  const imageClass = imageSize === "large" ? "w-[550px] h-[300px]" : "w-[200px] h-[200px]";

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-96 overflow-hidden rounded-lg"> {/* Increased height */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full duration-600 ease-in-out ${index === currentIndex ? "block" : "hidden"}`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <div className="flex flex-col items-center justify-center h-full bg-white rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className={`${imageClass} object-cover rounded-md mb-4`} // Dynamically set image size
              />
              <h3 className="text-lg text-black font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center px-4">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full bg-white"
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

    


      {/* Slider Controls (Conditional Rendering) */}
      {showArrows && (
        <>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default About;
