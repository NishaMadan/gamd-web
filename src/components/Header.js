import React, { useEffect, useState } from 'react';

import Nav from '../components/Nav';
import Socials from '../components/Socials';

//import LogoWhite from '../assets/img/header/logo-white.png';

import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../variants';

const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? 'show' : ''}
      className="bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4 h-[84px]"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate="show"
        className="container mx-auto"
      >
        <div className="flex justify-between gap-y-2 items-center px-4 lg:px-0 relative text-white">
          {/* Logo */}
          <motion.div
  variants={fadeIn('down', 'tween', 1, 1.4)}
  className="text-center"
>
  {/* Main Title */}
  <h1 className="text-xl font-bold text-white tracking-wide">
    GA MORGAN DYNAMICS
  </h1>

  {/* Underline */}
  <div className="w-[100%] h-[2px] bg-red-600 mx-auto my-1"></div>

  {/* Tagline */}
  <p className="text-xs text-red-600 tracking-wider font-semibold">
    FASHION | TECHNOLOGY | SOLUTIONS
  </p>
</motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>

          {/* Menu */}
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1.4)}
            className={`${
              nav ? 'gap-y-0' : 'gap-y-2'
            } flex bg-red-400/20 flex-col items-center justify-center w-12 h-10 p-3 cursor-pointer border-2 rounded-full`}
            onClick={() => setNav(!nav)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>

            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-[2px] bg-white"
            ></motion.div>
          </motion.div>

          {/* Dropdown Menu */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? 'show' : ''}
            className="absolute bg-accent w-[1300px] h-[40px] right-0 top-full  rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;











// import React, {useEffect, useState}from 'react';


// import Nav from '../components/Nav';
// import Socials from '../components/Socials';

// import LogoWhite from '../assets/img/header/logo-white.png';

// import {motion} from 'framer-motion';

// import { fadeIn, staggerContainer } from '../variants';
// //import { type } from '@testing-library/user-event/dist/type';


// const headerVariants = {
//   hidden:{
//     padding: '84px 0 84px 0',
//     background: 'none',
//   },
//   show: {
//     padding: '14px 0 14px 0',
//     background : 'rgba(0,0, 0,0.92)',
//     transition: {
//       type: 'spring',
      

//     },
//   },
// };


// export const navVariants = { 
//   hidden: {
//     clipPath : 'circle(5.8% at 50% 0)',
//     opacity: 0,
//     transition: {
//       type: 'spring',
//       delay: 0.2,
//       stiffness: 300,
//       damping: 140
//     }
//   },
//   show: {
//     opacity: 1,
//     clipPath : 'circle(130% at 50% 0)',
//     transition: {
//       type: 'spring',
//       stiffness: 80,
      
//     },
//   },
// };
// const Header = () => {

//   const [isActive, setIsActive] = useState(false);

//   const [nav, setNav]= useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       window.scrollY >  50 ? setIsActive(true) : setIsActive(false);
//     })
//   })

//   return( 
//   <motion.header
//   variants={headerVariants}
//   initial="hidden"
//   animate={isActive ? 'show' : ''}
//   className="bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4 h-[84px]" // Set a fixed height here
// >

//     <motion.div 
//     variants={staggerContainer(0.3, 1)}
//     initial= 'hidden'
//     animate={'show'}
//     className='container mx-auto'
//     >
//       <div className='flex justify-between gap-y-2 items-center px-4 lg:px-0 relative text-white'>
//         <motion.div 
//         variants={fadeIn('down', 'tween', 1, 1.4 )}
//         className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex  bg-red-400/20 flex-col items-center justify-center w-12 h-10 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full`}
//         onClick={() => setNav(!nav)}>
//             <motion.div 
//           initial={{
//             rotate: 0,
//           }}
//           animate={{rotate: nav ? -45 : 0, translateY:  nav ? 2: 0}}
//           className='w-full h-[2px] bg-white'>

//           </motion.div>

//           <motion.div 
//           initial={{
//             rotate: 0,
//           }}
//           animate={{rotate: nav ? 45 : 0}}
//           className='w-full h-[2px] bg-white'>

//           </motion.div>
        
//           </ motion.div>
//         <motion.div variants={fadeIn('down', 'tween', 1.2, 1.4 )}>
//           <a href='#'>
// <img className={`${isActive ? ' w-[200px] h-[50px]' : 'w-[200px] h-[50px]'}`} src={LogoWhite} />
//           </a>
//           </motion.div>
//           <motion.div variants={fadeIn('down', 'tween', 1.4, 1.4 )} className='hidden  lg:flex'>
//             <Socials />
//           </motion.div>
//           <motion.div
//   variants={navVariants}
//   initial="hidden"
//   animate={nav ? 'show' : ''}
//   className="absolute bg-accent w-[210px] h-[450px] right-0 lg:left-0
//     top-[100%] z-50 rounded-lg shadow-xl"
// >
//   <Nav />
// </motion.div>

//       </div>

//     </motion.div >

//   </motion.header>

//   );
//   };

// export default Header;
