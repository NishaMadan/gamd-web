import React from 'react';
import img from '../assets/image/2D_001.jpg';

function Aposervice() {
  return (
    <section  id='apo-service'  className="pt-16 px-4 bg-black" style={{padding: '20px'}}>
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold uppercase mb-4 text-red-600 tracking-wide">APO Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          After COVID-19, many companies faced challenging situations. GA Morgan initiated
          various Apparel Process Outsourcing (APO) services to support the industry.
        </p>
      </div>

      {/* Image and List Section */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={img} 
            alt="APO Services" 
            className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* List Section */}
        <div className="lg:w-1/2">
          <ul className="list-disc list-inside text-gray-800 text-lg space-y-4">
            <li className="hover:text-indigo-500 transition-colors">Basic Garment Sketch, Fabric Design, and Simulation</li>
            <li className="hover:text-indigo-500 transition-colors">3D Garment Designing and Virtual Fit Test</li>
            <li className="hover:text-indigo-500 transition-colors">2D Pattern Designing and Grading</li>
            <li className="hover:text-indigo-500 transition-colors">Pattern Capturing</li>
            <li className="hover:text-indigo-500 transition-colors">Pattern Grading</li>
            <li className="hover:text-indigo-500 transition-colors">Cut Order Planning and Marker Making</li>
            <li className="hover:text-indigo-500 transition-colors">Pattern and Marker Plotting</li>
            <li className="hover:text-indigo-500 transition-colors">Various Types of Pattern Conversion</li>
            <li className="hover:text-indigo-500 transition-colors">Made to Measure Order Processing</li>
            <li className="hover:text-indigo-500 transition-colors">Automatic Spreading and Automatic Cutting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Aposervice;
