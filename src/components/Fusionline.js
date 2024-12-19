import React from "react";
import fusionImage from "../assets/image/FUSION LINE_001 (2).png";

function FusionLine() {
  return (
    <section  id="fusion-line" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h4 className="uppercase text-lg font-semibold mb-2">Fusion Line</h4>
          
        </div>

        {/* Image Section with Hover Interaction */}
        <div className="relative group mx-auto max-w-7xl">
          <img
            src={fusionImage}
            alt="Fusion Line"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Anchor Links */}
          <div className="absolute top-20 left-0 gap-12 w-full h-full flex justify-center items-center">
            <a
              href="https://www.morgantecnica.com/en/products/machinery/loaders-range/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black  px-3 py-1 rounded hover:bg-red-700 hover:scale-110 transition-all"
            >
              Loader
            </a>
            <a
              href="https://www.morgantecnica.com/en/products/machinery/spreaders-range/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black px-3 py-1 rounded hover:bg-red-700 hover:scale-110 transition-all"
            >
              Spreader
            </a>
            <a
              href="https://www.morgantecnica.com/en/products/machinery/table-range"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black  px-3 py-1 rounded hover:bg-red-700 hover:scale-110 transition-all"
            >
              Air/Conveyor Table
            </a>
            <a
              href="https://www.morgantecnica.com/en/products/machinery/labelers/labellers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black  px-3 py-1 rounded hover:bg-red-700 hover:scale-110 transition-all"
            >
              Labeller
            </a>
            <a
              href="https://www.morgantecnica.com/en/products/machinery/cutter-range/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black  px-3 py-1 rounded hover:bg-red-700 hover:scale-110 transition-all"
            >
              Auto Cutter
            </a>
          </div>
        </div>

        {/* Serving Section */}
        <h3 className="text-center mt-12 mb-8 text-xl font-bold">SERVING</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Customers" },
            { value: "260+", label: "Auto Spreaders" },
            { value: "120+", label: "Auto Labellers" },
            { value: "90+", label: "Pin Tables" },
            { value: "30+", label: "Cut Plans" },
            { value: "80+", label: "Plotters" },
            { value: "105+", label: "Auto Cutters" },
            { value: "185+", label: "Conveyor Tables" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-red-500 text-white text-center p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <h4 className="text-2xl font-bold">{item.value}</h4>
              <p className="text-sm uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FusionLine;
