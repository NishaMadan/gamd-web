import React from 'react';
import img1 from '../assets/image/training1.jpg';
import img2 from '../assets/image/training2.jpg';
import img3 from '../assets/image/mitc.png';

function Training() {
  return (
    <section className="bg-gray-100 py-10" id='training'>
      {/* Heading and Paragraph Section */}
      <div className="container mx-auto px-4">
        <div className="md:flex-row items-center mb-10">
        
      
            <h3 className="text-red-600 text-2xl md:text-3xl font-bold uppercase mb-4">
              Morgan Industrial Training Centre (MITC)
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Morgan Industrial Training Centre (MITC) is a state-of-the-art
              technological industrial training centre equipped with all types
              of automation machinery and design software. MITC aims to train
              all the existing Morgan customers as a first priority to utilize
              the maximum capacity of the technology, and offers training
              courses to the fashion industry including other fashion
              institutes for practical experience.
            </p>
         
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <img
            src={img1}
            alt="Training 1"
            className="w-72 h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="Training 2"
            className="w-72 h-48 object-cover rounded-lg shadow-md"
          />
          <img
            src={img3}
            alt="Training 3"
            className="w-72 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Training List Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-red-600 text-xl font-semibold uppercase text-center mb-6">
            The Courses Offered
          </h4>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
            <li>Design Process Digitalization (Sketch, 2D and 3D)</li>
            <li>2D and 3D Designing and Fit Testing</li>
            <li>Pattern Making and Grading (2D)</li>
            <li>Marker Nesting Rules and Procedures (2D)</li>
            <li>Cut Order Planning (MasterMind)</li>
            <li>Made to Measure Process Digitalization and Automation</li>
            <li>Cutting Room Planning and Management</li>
            <li>Cutting Room Automation Machine Operation and Basic Settings</li>
            <li>Cutting Room Automation Machine Maintenance</li>
            <li>Plaid Matching and Cutting Process Automation</li>
            <li>On Demand / Micro Factory Order Management and Cutting Automation</li>
            <li>Fabric Handling and Inspection</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Training;
