import React from "react";
import marketingIcon from "../assets/image/home_sales.svg";
import serviceIcon from "../assets/image/home_service.svg";
import solutionIcon from "../assets/image/home_solution.svg";
import apoIcon from "../assets/image/home_apo.svg";
import trainingIcon from "../assets/image/home_training.svg";
import consultancyIcon from "../assets/image/home_consultant.svg";
import rndIcon from "../assets/image/home_R&D.svg";
import manufacturingIcon from "../assets/image/home_manufacture.svg";
import refurbishedIcon from "../assets/image/home_refurbish.svg";

function WhatWeDo() {
  const services = [
    {
      title: "Marketing",
      description: "High-performance cutting automation machineries and software.",
      icon: marketingIcon,
    },
    {
      title: "Services",
      description: "On-site service solutions at affordable cost.",
      icon: serviceIcon,
    },
    {
      title: "Solutions",
      description: "Specific industry application solutions.",
      icon: solutionIcon,
    },
    {
      title: "APO Services",
      description:
        "Apparel process outsourcing service for design and development.",
      icon: apoIcon,
    },
    {
      title: "Training",
      description:
        "Industrial training on cutting room automation and apparel designing.",
      icon: trainingIcon,
    },
    {
      title: "Consultancy",
      description:
        "Re-engineering of automated cutting rooms for higher efficiency and productivity.",
      icon: consultancyIcon,
    },
    {
      title: "R&D",
      description:
        "Continuous R&D on application requirements and solution development.",
      icon: rndIcon,
    },
    {
      title: "Manufacturing",
      description: "Cutting room allied equipment manufacturing.",
      icon: manufacturingIcon,
    },
    {
      title: "Refurbished Machines",
      description: "Reconditioning of pre-owned equipment.",
      icon: refurbishedIcon,
    },
  ];

  return (
    <section  id="what-we-do" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-black font-bold uppercase mb-4">What We Do</h2>
          <p className="text-gray-600">
            Explore the various services and solutions we offer.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto h-16"
                />
              </div>
              <h5 className="text-lg text-black font-semibold uppercase mb-2">
                {service.title}
              </h5>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
