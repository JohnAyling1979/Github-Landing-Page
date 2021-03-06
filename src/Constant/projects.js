import coas from '../images/coas.png';
import earthDefender from '../images/earth-defender.png';
import lotsa from '../images/lotsalogomobile.svg';
import orderve from '../images/orderve-beta-logo.png';
import pact from '../images/pact_logo.png';
import urfl from '../images/URFL.png';
import backgroundGen from '../images/background-gen.png';
import dungeonSurvivor from '../images/dungeon-survivor.png';

const projects = [
	{
		name: 'Lotsa Helping Hands',
		description: 'Is a community driven site that lets user create communities, add members, and create task to assist a member that has health issues or special needs. It uses twig templates and a php backend. It has both the website and apps done in React Native for iOS and Android',
		image: lotsa,
		link: 'https://my.lotsahelpinghands.com'
	},
	{
		name: 'Orderve',
		description: 'Is an online market place specializing on packaging container built using the Magento 2 framework',
		image: orderve,
		link: 'https://orderve.com'
	},
	{
		name: 'Polo community Theatre',
		description: 'Website for the local theatre. It has a custom CMS for admin to add show, tickets, etc all writen with React',
		image: pact,
		link: 'https://polotheatre.org'
	},
	{
		name: 'Earth Defender',
		description: 'A tower defence/arcade shooter Android game created using C# and Unity',
		image: earthDefender,
		link: 'https://play.google.com/store/apps/details?id=com.Studios404.EarthDefender&hl=en_US&gl=US'
	},
	{
		name: 'Carrot on a Stick',
		description: 'An endless runner for iOS and Android created using C# and Unity',
		image: coas,
		link: 'https://play.google.com/store/apps/details?id=com.Studios404.Carrotonastick&hl=en_US&gl=US'
	},
	{
		name: 'Unofficial Roblox Friends List',
		description: 'A lightweight app that lets you check if your friends are online and also see their friends',
		image: urfl,
		link: 'https://play.google.com/store/apps/details?id=com.johnayling.unofficialrobloxfriendlist&hl=en_US&gl=US'
	},
	{
		name: 'Background Generator',
		description: 'Lets you preview a linear background. Also randomly generate the two colors',
		image: backgroundGen,
		link: 'https://johnayling1979.github.io/background-generator/'
	},
	{
		name: 'Dungeon Survivor',
		description: 'Build with Construct 2. This game is an homage to the old gauntlet game',
		image: dungeonSurvivor,
		link: 'https://johnayling1979.github.io/Dungeon/'
	}
];

export default projects;