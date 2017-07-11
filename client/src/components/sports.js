// Contains all the sports that are currently offered
// sports icons
import baseballIcon from '../assets/images/sports_icons/baseball.svg';
import footballIcon from '../assets/images/sports_icons/football.svg';
import hockeyIcon from '../assets/images/sports_icons/puck.svg';
import soccerIcon from '../assets/images/sports_icons/soccer.svg';
import basketballIcon from '../assets/images/sports_icons/basketball.svg';

// list of sports offered
export const sports = [
	{name: 'Football', icon: footballIcon},
	{name: 'Basketball', icon: basketballIcon},
	{name: 'Soccer', icon: soccerIcon},
	{name: 'Baseball', icon: baseballIcon},
	{name: 'Hockey', icon: hockeyIcon}
];

export const SportsIcons = {
	Football: footballIcon,
	Baseball: baseballIcon,
	Soccer: soccerIcon,
	Basketball: basketballIcon,
	Hockey: hockeyIcon
};
