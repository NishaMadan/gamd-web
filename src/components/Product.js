import React from 'react';
import product1 from '../assets/image/solutions1.png'
import product2 from '../assets/image/Essentials Automation by GA Morgan Black.svg'
import Pin2Match from '../assets/image/Pin2Match-removebg-preview.png';
import Tube100 from '../assets/image/Tube100-removebg-preview.png';
import UNLAX from '../assets/image/UNLAX-removebg-preview.png';
import drift from '../assets/image/Drift.png';
import VIZpATTERN from '../assets/image/VizPattren-removebg-preview.png';


import img1 from '../assets/image/solutions_Ess1.png';
import img2 from '../assets/image/solutions_Ess2.png';
import img3 from '../assets/image/solutions_Ess3.png';
import img4 from '../assets/image/solutions_Ess4.png';
import img5 from '../assets/image/solutions_Ess5.jpg';

function Product() {
  return (
    <div id='products'>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 lg:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('img/about_1.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h3 className="text-3xl lg:text-5xl font-bold text-red-500 uppercase mb-4 animate-fade-in">
            Italian Fashion Technology
          </h3>
          <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto animate-slide-up">
            Morgan Tecnica is a multinational group creating innovative technological alternatives for cutting rooms and beyond.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 lg:py-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left animate-slide-in">
            <i className="text-4xl text-red-500 mb-6">“</i>
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">
              Morgan Tecnica is a solid business enterprise, providing cutting-edge technology in cutting rooms.
            </h4>
            <p className="text-gray-600 leading-relaxed">
            As a result of a continuous exceptional growth, Morgan Tecnica today is a multinational group of companies, successfully operating almost everywhere in the world, while proudly keeping the R&D and entire production “Made in Italy”. GA Morgan is the subsidiary of MORGAN TECNICA, which takes care of Product promotion, Marketing, Sales, Installation, Training, Implementation, service and spare parts supply for India, Bangladesh, Sri Lanka and Middle East Market.
            </p>
          </div>
          <div className="text-center">
            <img src={product1 } alt="Morgan Solutions" className="w-3/4 mx-auto lg:w-full animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-32">
        <div className="container mx-auto">
          <h3 className="text-center text-3xl lg:text-4xl font-bold uppercase text-red-500 mb-12 animate-fade-in">
            Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '3DRESS', desc: 'Virtual 3D Designing Software', link: 'https://www.morgantecnica.com/en/3dress/' },
              { title: '2D CAD', desc: 'Pattern Making, Grading, and Nesting Software', link: 'https://www.morgantecnica.com/en/products/software/cad-md900/' },
              { title: 'MASTERMIND', desc: 'Powerful Cut Order Planning Software', link: 'https://www.morgantecnica.com/en/products/software/cop' },
              { title: 'FOX2 60/80/200 DELTA', desc: 'Automatic Spreading Machines', link: 'https://www.morgantecnica.com/en/products/machinery/spreaders-range' },
              { title: 'FUSION LINE', desc: 'Conveyor Spreading Tables', link: 'https://www.morgantecnica.com/en/products/machinery/morgan-fusion-line/' },
              { title: 'NEXT2 30/70/90 DELTA', desc: 'High Performance Automatic Cutters', link: 'https://www.morgantecnica.com/en/products/machinery/cutter-range' },
              { title: 'PLY1 LINE', desc: 'High Speed Single ply cutting system.', link: 'https://www.ply1.com' },
              { title: 'JOKER LABELLER', desc: 'Automatic Labelling Machine.', link: 'https://www.morgantecnica.com/en/products/machinery/labelers/labellers/' },
              { title: 'Leonardo', desc: 'High speed inkjet plotter.', link: 'https://www.morgantecnica.com/en/products/machinery/plotter' },


            ].map((product, idx) => (
              <a key={idx} href={product.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:bg-gray-700 transition-all animate-bounce-in">
                <h5 className="text-l font-semibold mb-2 text-red-500">{product.title}</h5>
                <p className="text-gray-300 text-xs ">{product.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 py-16 lg:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('img/about_1.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h3 className="text-3xl lg:text-5xl font-bold text-red-500 uppercase mb-4 animate-fade-in">
          Allied Process Automation
          </h3>
          
        </div>
      </section>
      <section className="bg-white py-16 lg:py-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left animate-slide-in">
            <i className="text-4xl text-red-500 mb-6">“</i>
            <h4 className="text-2xl font-semibold mb-6 text-gray-800">
            Essentials is the arm of GA Morgan, Manufacturing of allied cutting room machineries and software development, focused mainly for Indian market under Make in India platform.            </h4>
            <p className="text-gray-600 leading-relaxed">
            Aim to develop unique products in order to support Morgan Tecnica equipment and increase the overall performance of cutting room operation.            </p>
          </div>
          <div className="text-center">
            <img src={product2 } alt="Morgan Solutions" className="w-3/4 mx-auto lg:w-full animate-fade-in" />
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
    <div className="text-center">
      <img src={img1} alt="GAMD" className="logo logo-dark mb-4" />
    </div>
    <div className="text-center">
      <img src={img2} alt="GAMD" className="logo logo-dark mb-4" />
    </div>
    <div className="text-center">
      <img src={img3} alt="GAMD" className="logo logo-dark mb-4" />
    </div>
    <div className="text-center">
      <img src={img4} alt="GAMD" className="logo logo-dark mb-4" />
    </div>
    <div className="text-center">
      <img src={img5} alt="GAMD" className="logo logo-dark mb-4" />
    </div>
  </div>
          </div>
   
        </div>

    
      </section>
      <section className="bg-gray-900 text-white py-16 lg:py-32">
        <div className="container mx-auto">
          <h3 className="text-center text-3xl lg:text-4xl font-bold uppercase text-red-500 mb-12 animate-fade-in">
            Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img:  Pin2Match , title: 'PIN2MATCH', desc: 'Pinup Table with Visual Marker Projection', link: 'doc/pin2match-email.pdf' },
              { img: Tube100, title: 'TUBE 100', desc: 'Tubular Fabric Spreading Machine', link: '#' },
              { img: drift , title: 'DRIFT', desc: 'Relaxed Fabric Auto Loader.', link: '#' },
              { img: VIZpATTERN, title: 'VIZPATTERN', desc: 'Pattern Viewer for Inspection.', link: 'doc/VizPattern Catalogue -email.pdf' },

              { img: UNLAX, title: 'UNLAX', desc: 'Fabric Relaxing Machine', link: 'doc/UNLAX-EMAIL.pdf' },
            ].map((product, idx) => (
              <a key={idx} href={product.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:bg-gray-700 transition-all animate-bounce-in">
                  <img src={product.img} alt={product.title} className="w-full mb-4" />
                <h5 className="text-l font-semibold mb-2 text-red-500">{product.title}</h5>
                <p className="text-gray-300 text-xs ">{product.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

 
    </div>
  );
}

export default Product;
