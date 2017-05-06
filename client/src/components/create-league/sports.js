//sports icons
import baseballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/baseball.svg';
import footballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/football.svg';
import hockeyIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/puck.svg';
import soccerIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/soccer.svg';
import basketballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/basketball.svg';

// list of sports offered
const sports = [
	{name: 'Football', icon: footballIcon},
	{name: 'Basketball', icon: basketballIcon},
	{name: 'Soccer', icon: soccerIcon},
	{name: 'Baseball', icon: baseballIcon},
	{name: 'Hockey', icon: hockeyIcon},
];

export default sports;
