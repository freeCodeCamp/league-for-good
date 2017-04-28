import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const sports = [
	{name: "Football", link: "/create/football"},
	{name: "Basketball", link: "/create/basketball"},
	{name: "Soccer", link: "/create/soccer"},
	{name: "Baseball", link: "/create/baseball"},
	{name: "Hockey", link: "/create/hockey"},
	{name: "Custom", link: "/create/custom"}
];

const CreateLeagueCard = () => (
	<Card>
		<CardTitle 
			title="Create League"
			subtitle="Choose a sport"
		/>
		<CardActions>
			{sports.map((sport, i) => {
				return <FlatButton label={sport.name} key={i} backgroundColor="lightblue" />;
			})}
		</CardActions>
	</Card>
);

export default CreateLeagueCard;