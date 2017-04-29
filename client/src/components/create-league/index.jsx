import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import sportIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/baseball.svg';

const sports = [
	{name: "Football", link: "/create/football"},
	{name: "Basketball", link: "/create/basketball"},
	{name: "Soccer", link: "/create/soccer"},
	{name: "Baseball", link: "/create/baseball"},
	{name: "Hockey", link: "/create/hockey"}
];

const buttonStyle = {
	marginBottom: '10px'
};

const CreateLeagueCard = (props) => (
	<Card>
		<CardTitle 
			title="Create League"
			subtitle="Choose a sport"
		/>
		<CardActions>
			<img src={sportIcon} />
			{sports.map((sport, i) => {
				return <FlatButton label={sport.name}
					key={i}
					backgroundColor="lightblue"
					style={buttonStyle}
					onTouchTap={() => props.onClick(sport.name)}
				/>;
			})}
		</CardActions>
	</Card>
);

export default CreateLeagueCard;