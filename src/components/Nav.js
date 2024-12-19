import React from 'react';
import { navData } from '../data';
import LogoDark from '../assets/image/morgan__logo-dark.png';

const Nav = () => {
  return (
    <nav className=" flex flex-col items-center bg-white py-6">
      {/* Logo Section */}
      <div className="mb-4 flex flex-col items-center">
        <img src={LogoDark} alt="Morgan Logo" className="w-32 h-auto" />
        <h1 className="text-red-600 text-lg font-bold">MorganTecnica</h1>
      </div>

      {/* Horizontal Navigation */}
      <ul className="flex justify-center bg-white   gap-x-10 border-t-2 border-red-600 pt-4 w-full">
        {navData.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className="text-black font-semibold text-lg tracking-wide hover:text-red-600 transition duration-300"
            >
              {item.name}
            </a>
            {/* Hover underline */}
            <div className="absolute left-0  h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

