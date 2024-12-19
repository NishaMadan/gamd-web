import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
//import Menu from './components/Menu';
//import Team from './components/Team';
//import Testimonial from './components/Testimonial';
//import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Graph from './components/Graph';
import WhatWeDo from './components/Whatwedo';
import Milestones from './components/Milestones';
import Fusionline from './components/Fusionline';
import Product from './components/Product';
import Service from './components/Service';
import Contact from './components/Contact';
import Training from './components/Training';
import Aposervice from './components/Aposervice';
import Refeq from './components/Refeq';
import Testimonial from './components/Testimonial';
//import TurnoverRadialGraph from './components/TurnoverRadialGraph';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      
      <WhatWeDo />
    
     
 
      <Product />
      <Service />
    <Fusionline />
    <Training />
    <Aposervice />
    <Refeq />
    
      <About />
      
      <Testimonial />

      <Graph />
      <Milestones />
      <Contact />
      <Footer />
     
  
      <div className='h-[30px] md:h-[30px]'></div>
    </div>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // Import components
// import Hero from './components/Hero';
// import About from './components/About';
// import Graph from './components/Graph';
// import WhatWeDo from './components/Whatwedo';
// import Milestones from './components/Milestones';
// import Fusionline from './components/Fusionline';
// import Product from './components/Product';
// import Service from './components/Service';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Training from './components/Training';
// import Aposervice from './components/Aposervice';
// import Refeq from './components/Refeq';
// // import TurnoverRadialGraph from './components/TurnoverRadialGraph';

// const App = () => {
//   return (
//     <Router>
//       <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/what-we-do" element={<WhatWeDo />} />
//           <Route path="/graph" element={<Graph />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/fusionline" element={<Fusionline />} />
//           <Route path="/training" element={<Training />} />
//           <Route path="/aposervice" element={<Aposervice />} />
//           <Route path="/refeq" element={<Refeq />} />
//           <Route path="/milestones" element={<Milestones />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/footer" element={<Footer />} />
//         </Routes>
//         <div className="h-[30px] md:h-[30px]"></div>
//       </div>
//     </Router>
//   );
// };

// export default App;
