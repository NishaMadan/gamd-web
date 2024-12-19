// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
  FaLinkedin,
} from 'react-icons/fa';
// import images
import AboutImg from './assets/image/Picture1.png';
import AboutImg1 from './assets/image/Picture2.jpg';
import AboutImg3 from './assets/image/Picture3.jpg';
import AboutImg4 from './assets/image/Picture4.png';
import AboutImg5 from './assets/image/Picture6.png';
import AboutImg6 from './assets/image/Picture7.jpg';
import AboutImg7 from './assets/image/Picture8.png';
import AboutImg8 from './assets/image/Picture9.png';
import AboutImg9 from './assets/image/IMG_7079.jpg';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
// import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
// import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
// import Avatar3 from '../src/assets/img/testimonial/avatar3.png';


export const navData = [
  { href: '#home', name: 'Home' },
  { href: '#about', name: 'About' },
  { href: '#what-we-do', name: 'What We Do' },
  { href: '#turnover', name: 'Turnover' },
  { href: '#products', name: 'Products' },
  { href: '#service', name: 'Service' },
  { href: '#training', name: 'Training' },
  { href: '#fusion-line', name: 'Fusion Line' },
  { href: '#apo-service', name: 'Apo Service' },
  { href: '#contact', name: 'Contact' },
];

// export const navData = [
//   { href: '#/', name: 'Home' },
//   { href: '#/about', name: 'About' },
//   { href: '#/what-we-do', name: 'What We Do' },
//   { href: '#/graph', name: 'Graph' },
//   { href: '#/product', name: 'Products' },
//   { href: '#/service', name: 'Service' },
//   { href: '#/fusionline', name: 'Fusionline' },
//   { href: '#/training', name: 'Training' },
//   { href: '#/aposervice', name: 'Aposervice' },
//   { href: '#/refeq', name: 'Refeq' },
//   { href: '#/milestones', name: 'Milestones' },
//   { href: '#/contact', name: 'Contact' },
// ];
export const heroData = {
  pretitle: 'Nothing gives happiness like',
  title: 'Cloth',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};

export const socialData = [
  { href: 'https://www.youtube.com/results?search_query=ga+morgan+tecnica', icon: <FaYoutube /> },
  { href: 'https://www.facebook.com/MorganTecnica/', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/morgantecnica/', icon: <FaInstagram /> },
  { href: 'https://www.linkedin.com/company/morgan-tecnica-spa?trk=top_nav_home', icon: <FaLinkedin /> },
];
export const testimonialData = {
  title: "WHO WE ARE",

 
  slider: [
    {
      
      message:
      '20+ years of experience in Apparel Technology solution providing, process automation, material optimization, data management, and business management.',
      image: AboutImg,
      name: 'Anandakumar Duraisamy',
      subtitle: 'Management',
      occupation: 'Managing Director',
    },
    {
      subtitle: 'Management',
      message:
'Founder and Board Director of GA Morgan and CEO of Morgan Tecnica Spa, DNA of Giachetti family who is pioneer of cutting room machinery manufacturing and software development since 1972 in Italy, Dr. Giachetti is a high visionary business leader, team builder and successful entrepreneur in the industry',    btnText: 'Learn more',
      image: AboutImg1,
      name: 'FABRIZIO GIACHETTI',
      occupation: 'Board Director',
    },
    {
      subtitle: 'Management',
      message:
'20+ year experience in Finance management, Morgan Tecnica Group CFO , closely involved in managing all finance activities of GA Morgan since 2008.',    btnText: 'Discover',
      image: AboutImg3,
      name: 'Fabio Tabladini',
      occupation: 'Finance Director',
    },
  ],
};
export const aboutData = [
  {
    pretitle: 'Managing Director',
    title: 'Anandakumar Duraisamy',
    subtitle:
      '20+ years of experience in Apparel Technology solution providing, process automation, material optimization, data management, and business management.',
    btnText: 'Find out more',
    image: AboutImg, // Update this path
  },
  {
    pretitle: 'Board Director',
    title: 'FABRIZIO GIACHETTI',
    subtitle:
'Founder and Board Director of GA Morgan and CEO of Morgan Tecnica Spa, DNA of Giachetti family who is pioneer of cutting room machinery manufacturing and software development since 1972 in Italy, Dr. Giachetti is a high visionary business leader, team builder and successful entrepreneur in the industry',    btnText: 'Learn more',
    image: AboutImg1, // Update this path
  },
  {
    pretitle: 'Finance Director',
    title: 'Fabio Tabladini',
    subtitle:
'20+ year experience in Finance management, Morgan Tecnica Group CFO , closely involved in managing all finance activities of GA Morgan since 2008.',    btnText: 'Discover',
    image:AboutImg3, // Update this path
  },
  {
    pretitle: 'Country Head',
    title: 'Prakhar Singh',
    subtitle:
'Master in Business Administration and 20+ years experience in marketing and business management of industrial machineries, currently heading Bangladesh and India market.',
    image:AboutImg4 , // Update this path
  },
  {
    pretitle: 'Business Head',
    title: 'Devaraj',
    subtitle:
    'Master in Business Administration and 20+ years experience in marketing of high value Apparel Machinery and Technology, heading the business of South and Western India.',
    image:AboutImg5, // Update this path
  },
  {
    pretitle: 'Admin Manager',
    title: 'Anita Anandakumar',
    subtitle:
'Bachelor degree and 18+ years experience in Garment machinery business and software applications, heading back office management and finance activities',
    image:AboutImg6, // Update this path
  },
  {
    pretitle: 'Manager Service',
    title: 'Uday Venugopal',
    subtitle:
'Bachelor in Engineering, 14+ years experience in Cutting Room Machinery, installation, training and trouble shooting.',
    image:AboutImg7, // Update this path
  },
  {
    pretitle: 'Manager HR and Applications',
    title: 'Narendra ',
    subtitle:
'Master Degree and 20+ years experience in Apparel Manufacturing and human resource management.',
    image:AboutImg8, // Update this path
  },
  {
    pretitle: '',
    title: '',
    subtitle:
'Team of 40+ R & D Engineers, Production Engineers, Software developers, Fashion Designers, Application Engineers, Marketing professionals, Service Engineers and Back office professionals.' ,
   image:AboutImg9, // Update this path
  },

];


export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Cake',
      price: '$7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Veggie Burger',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'King Burger',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Mexican Burger',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chief',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};



export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
