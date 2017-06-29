import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
	Card,
	CardActions,
	CardHeader,
	CardText,
	CardTitle
} from 'material-ui/Card';
import CreateLeagueButton from './CreateLeagueButton.jsx';

import { sports } from '../sports.js';
import { cssCreateLeague } from '../style';


// Creates a list of different buttons for selecting
// a sport type for the new league
// Once a sport type is selected, the proper form will be rendered
const CreateLeagueSelector = ({onSelect, selectedSport})=> (
	<Card style={cssCreateLeague.card.style}>
		<CardTitle
			title='Create a New League'
			titleColor={cssCreateLeague.card.title.titleColor}
			subtitle='Choose a sport'
			subtitleColor={cssCreateLeague.card.title.subtitleColor}
		/>
		<CardActions>
			{sports.map((sport, i) => {
				return (
					<CreateLeagueButton
						key={i}
						active={selectedSport == sport.name}
						label={sport.name}
						icon={sport.icon}
						onClick={onSelect}
					/>
				);
			})
		}
		</CardActions>
	</Card>
);

export default CreateLeagueSelector;
