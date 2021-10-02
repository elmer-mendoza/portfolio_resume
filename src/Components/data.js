import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { 
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiNodeDotJs,
  SiMongodb,
  SiAdobephotoshop,
  SiFigma,
  SiJquery,
  SiRedux,
  SiGraphql,
  SiMaterialUi,
  SiWordpress,
  SiPython

 } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'GM Paradise Resort',
    category: 'Website',
    img: './images/item-2.jpeg',
    desc: `Applied React, Hooks, Pure CSS, CMS-Contentful `,
  },
  {
    id: 2,
    title: 'Campsite Booking App',
    category: 'Website',
    img: './images/item-1.jpeg',
    desc: `Applied React, Redux, Bootstrap, Figma, NodeJs, Express, Passport JWT, OAuth, MongoDB `,
  },
  {
    id: 3,
    title: 'Booking App - React Native',
    category: 'Website',
    img: './images/item-3.jpeg',
    desc: `Applied React, Redux, Bootstrap, Figma, NodeJs, Express, Passport JWT, OAuth, MongoDB `,
  },
  
];
export default projects;

export const education = [
  {
    id: 1,
    accomplishment: 'full stack web + mobile development -bootcamp',
    school: 'Nucamp- US/Canada',
    year: "Sept 2021"
    
  },
  {
    id: 2,
    accomplishment: 'Licensed Insurance Agent',
    school: 'Alberta Insurance Council',
    year: ""
    
  },
  {
    id: 3,
    accomplishment: 'BS Civil Engineering',
    school: 'Mapua Nstitute of Technology - Philippines',
    year: ""
    
  },
  
];


export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
export const skills = [
  {
    id: 1,
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    id: 3,
    name: 'CSS/SCSS',
    icon: <SiCss3 />,
  },
  {
    id: 5,
    name: 'React/React Native',
    icon: <SiReact />,
  },
  {
    id: 4,
    name: 'Bootstrap/Reactstrap',
    icon: <SiBootstrap />,
  },
  {
    id: 12,
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    id: 7,
    name: 'NodeJs',
    icon: <SiNodeDotJs />,
  },
  {
    id: 8,
    name: 'MongoDB/Express',
    icon: <SiMongodb />,
  },
  {
    id: 9,
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    id: 10,
    name: 'jQuery',
    icon: <SiJquery />,
  },
  {
    id: 11,
    name: 'Figma',
    icon: <SiFigma />,
  },
  {
    id: 12,
    name: 'Photoshop',
    icon: <SiAdobephotoshop />,
  },
  {
    id: 12,
    name: 'Graphql',
    icon: <SiGraphql />,
  },
  {
    id: 12,
    name: 'Saas',
    icon: <DiSass/>,
  },
  {
    id: 12,
    name: 'Material-Ui',
    icon: <SiMaterialUi/>,
  },
  {
    id: 13,
    name: 'WordPress',
    icon: <SiWordpress/>,
  },
  {
    id: 14,
    name: 'Pythons',
    icon: <SiPython/>,
  },
];


export const jobs = [
	{
		"id": "recAGJfiU4CeaV0HL",
		"order": 3,
		"title": "Technical Support -Digital Marketing",
		"dates": "Sep 2015 - Dec 2020",
		"duties": [
			"Created and maintained the company's website using Wix, Shopify, WordPress & Builderall",
"Designed  creatives/adverts using Photoshop, Canva and Camtasia and posted to Facebook and Google ads",
"Created email campaigns and automate sending based on a schedule using Mailchimp or Mailingboss",
"Maintained and improved the databases of both customers and products"
		],
		"company": "BYMIAMERCK"
	},
	{
		"id": "recIL6mJNfWObonls",
		"order": 2,
		"title": "Structural Designer/Estimator",
		"dates": "Apr 2013 - Sep 2015",
		"duties": [
			"Liaised with different project stakeholders for clarification and progress reports",
			"Conducted quantity take-off  project estimation",
			"Checked thru manual math computation and in-house software the  structural soundness of steel  components",
			"Drawn using Autocad structural design of steel components for shop production",
			"Mentored new junior estimator"
		],
		"company": "CANAM"
	}
];

export const reviews = [
  {
    "id": "1",
    "name": "Elmer Mendoza",
    "date": "May 2, 2020",
    "image": "./images/item-1.jpeg",
    "numStar": "4",
    "comment": "Lorem ipsum dolor, e quo architecto omnis, et necessitatibus doloremque incidunt facilis laudantium nam laboriosam deleniti placeat, mollitia voluptate non, inventore commodi optio quis saepe! Amet, illum perspiciatis qui aspernatur, odio cum facilis dignissimos laborum, magnam aliquid sit natus sunt?"
  },
  {
    "id": "2",
    "name": "Merck Mendoza",
    "date": "November 8, 2021",
    "image": "./images/item-2.jpeg",
    "numStar": "5",
    "comment": "Lor est aliquid molestiae quo architecto omnis, et necessitatibus doloremque incidunt facilis laudantium nam laboriosam deleniti placeat, mollitia voluptate non, inventore commodi optio quis saepe! Amet, illum perspiciatis qui aspernatur, odio cum facilis dignissimos laborum, magnam aliquid sit natus sunt?"
  },
  {
    "id": "3",
    "name": "Mia Mendoza",
    "date": "October 2, 2020",
    "image": "./images/item-1.jpeg",
    "numStar": "3",
    "comment": "Lorem ipsum ds doloremque incidunt facilis laudantium nam laboriosam deleniti placeat, mollitia voluptate non, inventore commodi optio quis saepe! Amet, illum perspiciatis qui aspernatur, odio cum facilis dignissimos laborum, magnam aliquid sit natus sunt?"
  },
  {
    "id": "4",
    "name": "Emy Mendoza",
    "date": "January 8, 2021",
    "image": "./images/item-2.jpeg",
    "numStar": "4",
    "comment": "Lorem ipto omnis, et necessitatibus doloremque incidunt facilis laudantium nam laboriosam deleniti placeattate non, inventore commodi optio quis saepe! Amet, illum perspiciatis qui aspernatur, odio cum facilis dignissimos laborum, magnam aliquid sit natus sunt?"
  },
  {
    "id": "5",
    "name": "Pogi Mendoza",
    "date": "December 1, 2020",
    "image": "./images/item-1.jpeg",
    "numStar": "4",
    "comment": "Lorem ipsum dolor, sit amet consectetur adipisicing"
  },
  {
    "id": "6",
    "name": "Cute Mendoza",
    "date": "July 8, 2021",
    "image": "./images/item-2.jpeg",
    "numStar": "5",
    "comment": "Lorem quo architecto omnis, et necessitatibus doloremque incidunt facilis laudantium nam laboriosam deleniti placeat, mollitia voluptate non, inventore commodi optio quis saepe! Amet, illum perspiciatis qui aspernatur, odio cum facilis dignissimos laborum, magnam aliquid sit natus sunt?"
  }
];
