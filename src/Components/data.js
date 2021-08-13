import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
  SiJquery

 } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  }
];
export default projects;

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
    name: 'CSS/SCSS/Saas',
    icon: <SiCss3 />,
  },
  {
    id: 4,
    name: 'Bootstrap/Reactstrap',
    icon: <SiBootstrap />,
  },
  {
    id: 5,
    name: 'React/React Native',
    icon: <SiReact />,
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
];


export const jobs = [
	{
		"id": "recAGJfiU4CeaV0HL",
		"order": 3,
		"title": "Full Stack Web Developer",
		"dates": "December 2015 - Present",
		"duties": [
			"Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
			"Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
			"Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
		],
		"company": "TOMMY"
	},
	{
		"id": "recIL6mJNfWObonls",
		"order": 2,
		"title": "Front-End Engineer",
		"dates": "May 2015 - December 2015",
		"duties": [
			"Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
			"Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
			"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
			"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
		],
		"company": "BIGDROP"
	},
	{
		"id": "rec61x18GVY99hQq5",
		"order": 1,
		"title": "Engineering Intern",
		"dates": "May 2014 - September 2015",
		"duties": [
			"I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
			"YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
			"Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
		],
		"company": "CUKER"
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
