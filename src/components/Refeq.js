import React, { useState } from 'react';
import img1 from '../assets/image/fox-50-1.jpg';
import img2 from '../assets/image/Next-50.jpg';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion border border-gray-700 rounded-lg bg-gray-800 mb-4">
      <button
        className="accordion-header w-full text-left p-4 text-red-600 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content p-4 border-t border-gray-700">
          {content}
        </div>
      )}
    </div>
  );
}

function Refeq() {
  const spreaderData = [
    { id: 1, brand: 'Morgan', model: 'Fox 50', spec: '180cm', year: '2014' },
    { id: 2, brand: 'AUTEX', model: 'NA', spec: '100 KG 2.3mtr', year: 'NA' },
    { id: 3, brand: 'Gerber', model: 'NA', spec: 'XLS 50 KG 1.8mtr', year: 'NA' },
    { id: 4, brand: 'IMA', model: '805 FLY', spec: '100KG 2.3mtr', year: '2012' },
    { id: 5, brand: 'GERBER', model: 'SY101', spec: '100KG 2.0mtr', year: '2012' }
  ];

  const cutterData = [
    { id: 1, brand: 'Morgan', model: 'RAZOR 70', spec: '180 cm 4500 RPM', year: '2014' },
    { id: 2, brand: 'Morgan', model: 'RAZOR 70 HM', spec: '180 cm 6000 RPM', year: '2014' },
    { id: 3, brand: 'Morgan', model: 'RAZOR 70', spec: '230 cm 6000 RPM', year: '2013/14' },
    { id: 4, brand: 'Morgan', model: 'RAZOR 70', spec: '180 cm 6000 RPM', year: '2013/14' },
    { id: 5, brand: 'IMA', model: 'FORMULA', spec: '6 cm 2.2mtr CUTTER', year: 'NA' }
  ];

  return (
    <section className="pt-16 px-4 bg-black text-white" style={{padding: '20px'}}>
      {/* Refurbished Equipment Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold uppercase mb-4 text-red-600 tracking-wide">Refurbished Equipment</h2>
      </div>

      {/* Spreader Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-16">
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={img1} 
            alt="Spreader" 
            className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold uppercase mb-4 text-red-600">Spreader</h3>
          {spreaderData.map(item => (
            <Accordion
              key={item.id}
              title={`${item.brand} (${item.model})`}
              content={(
                <>
                  <p><strong>Specification:</strong> {item.spec}</p>
                  <p><strong>Year of Manufacturing:</strong> {item.year}</p>
                </>
              )}
            />
          ))}
        </div>
      </div>

      {/* Cutter Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold uppercase mb-4 text-red-600">Cutter</h3>
          {cutterData.map(item => (
            <Accordion
              key={item.id}
              title={`${item.brand} (${item.model})`}
              content={(
                <>
                  <p><strong>Specification:</strong> {item.spec}</p>
                  <p><strong>Year of Manufacturing:</strong> {item.year}</p>
                </>
              )}
            />
          ))}
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={img2} 
            alt="Cutter" 
            className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Refeq;

