import {
  Pratik,
  Visal,
  people01,
  people02,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from '../assets'
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from '../assets/images'
export const navLinks = [
  // {
  //   id: 'home',
  //   pathTo: '/',
  //   title: 'Home',
  // },
  {
    id: 'clients',
    pathTo: 'clients',
    title: 'ABOUT',
    dropdown: [
      { title: 'About Us', path: '/aboutUs' },
      { title: 'Our Team', path: '/ourTeam' },
      { title: 'Testimonials', path: '/testimonials' },
    ], // Dropdown options
  },
  {
    id: 'features',
    pathTo: 'features',
    title: 'OUR BUSINESS',
    dropdown: [
      { title: 'Interior Design', path: '/InteriorProjects', img: image1 },
      {
        title: 'Building Construction and Management',
        path: '/constructionManagement',
        img: image2,
      },
      {
        title: 'Engineering Works',
        path: '/engineeringWorks',
        img: image3,
      },
      {
        title: 'Architecture work',
        path: '/architectureWork',
        img: image4,
      },
      { title: 'Real Estate', path: '/realEstate', img: image5 },
    ], // Dropdown options
  },
  {
    id: 'OurWork',
    pathTo: 'OurWork',
    title: 'WHY CHOOSE US ?',
  },
{
    id: 'projects',
    pathTo: 'projects',
    title: 'PROJECTS',
},
  {
    id: 'contactUs',
    pathTo: 'clients',
    title: 'Contact Us',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Interior Design',
    content:
      'Elevate your interiors with our expert design team, transforming spaces into captivating works of art that reflect your unique style and personality.',
    path: '/InteriorProjects',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: 'Building Construction and  Management',
    content:
      'Trust our experienced construction management professionals to oversee every aspect of your project, ensuring seamless coordination, timely completion, and superior quality',
    path: '/constructionManagement',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Engineering Works',
    content:
      'Discover bespoke furniture designs tailored to your preferences, crafted with precision and creativity to enhance the beauty and functionality of your space.',
    path: '/engineeringWorks',
  },
  {
    id: 'feature-4',
    icon: send,
    title: 'Architecture work',
    content:
      'The best architectural designs that are unique and innovative, and that are tailored to your needs.',
  },
  {
    id: 'feature-5',
    icon: send,
    title: 'Real Estate',
    content:
      'We are a leading real estate company that offers the best deals on residential and commercial properties.',
  },
  {
    id: 'feature-6',
    icon: send,
    title: 'Infrastructure construction',
    content:
      'We are a leading infrastructure construction company that offers the best deals on residential and commercial properties.',
  },
]

export const feedback = [
  {
    id: 'feedback-1',
    name: 'Pratik Wakle', // "Pratik Wakle
    title: 'Director',
    img: Pratik,
  },
  {
    id: 'feedback-2',
    name: 'Visal Shelar',
    title: 'Director',
    img: Visal,
  },
]

export const stats = [
  {
    id: 'stats-1',
    title: 'Complete Projetcs',
    value: '100+',
  },
  
  {
    id: 'stats-3',
    title: 'Land Work',
    value: '2.5 Lakh sq.ft',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      // {
      //   name: "Home",
      //   link: "https://www.hoobank.com/content/",
      // },
      {
        key: 'footer-link-2',
        name: 'Our Work',
        link: 'OurWork',
      },
      {
        key: 'footer-link-3',
        name: 'About Us',
        link: 'clients',
      },
      {
        key: 'footer-link-4',
        name: 'Contact Us',
        link: 'contactUs',
      },
      {
        key: 'footer-link-1',
        name: 'Services',
        link: '#features',
      },
    ],
  },
  {
    title: 'Services Offered',
    links: [
      {
        name: 'Engineering Work',
        link: '/engineeringWorks',
      },
      {
        name: 'Execution Work',
        link: '/constructionManagement',
      },
      {
        name: 'Maintenance Work',
        link: '/constructionManagement',
      },
      {
        name: 'Architectural Work',
        link: '/architectureWork',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Construction Consultancy',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Real Estate',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
      {
        name: 'Interior Work',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
      {
        name: ' Land Survey',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
]

export const clients = [
  {
    id: 'client-1',
    logo: airbnb,
  },
  {
    id: 'client-2',
    logo: binance,
  },
  {
    id: 'client-3',
    logo: coinbase,
  },
  {
    id: 'client-4',
    logo: dropbox,
  },
]
export const interiorProjects = [
  {
    id: 'project-1',
    title: 'Interior Planning',
    img: image1,
  },
  {
    id: 'project-2',
    title: '3D Interior Designing',
    img: image2,
  },
  {
    id: 'project-3',
    title: 'Decorative Work',
    img: image3,
  },
]
export const constructionManagement = [
  {
    id: 'project-1',
    title: 'Structural Designing',
    img: image4,
  },
  {
    id: 'project-2',
    title: '3D Elevations (Exterior)',
    img: image5,
  },
  {
    id: 'project-3',
    title: 'Execution Work',
    img: image6,
  },
]
export const engineeringWorks = [
  {
    id: 'project-1',
    title: 'Furniture Design',
    img: image7,
  },
  {
    id: 'project-2',
    title: 'Modular Kitchen',
    img: image9,
  },
  {
    id: 'project-3',
    title: 'Wardrobe Design',
    img: image8,
  },
]
export const servicesSection = [
  {
    id: 'service01',
    title: 'Interior Design',
    path: '/InteriorProjects',
    img: image1,
  },
  {
    id: 'service02',
    title: 'Building Construction and Management',
    path: '/constructionManagement',
    img: image2,
  },
  {
    id: 'service03',
    title: 'Engineering Works',
    path: '/engineeringWorks',
    img: image3,
  },
  {
    id: 'service04',
    title: 'Architecture work',
    path: '/architectureWork',
    img: image4,
  },
  { id: 'service05', title: 'Real Estate', path: '/AVP/realEstate', img: image5 },
  
]
