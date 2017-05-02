import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import CreateLeagueButton from './CreateLeagueButton.jsx';

// Sport Icons
import baseballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/baseball.svg';
import footballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/football.svg';
import hockeyIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/puck.svg';
import soccerIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/soccer.svg';
import basketballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/basketball.svg';

const sports = [
	{name: "Football", link: "/create/football", icon: footballIcon},
	{name: "Basketball", link: "/create/basketball", icon: basketballIcon},
	{name: "Soccer", link: "/create/soccer", icon: soccerIcon},
	{name: "Baseball", link: "/create/baseball", icon: baseballIcon},
	{name: "Hockey", link: "/create/hockey", icon: hockeyIcon}
];

const CreateLeagueCard = (props) => (
	<Card>
		<CardTitle 
			title="Create League"
			subtitle="Choose a sport"
		/>
		<CardActions>
			{sports.map((sport, i) => {
				return <CreateLeagueButton
							key={i}
							label={sport.name}
							icon={sport.icon}
							onClick={props.onClick}
						/>; 
			})}
		</CardActions>
	</Card>
);

export default CreateLeagueCard;