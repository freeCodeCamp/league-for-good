import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardActions,
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
			subtitle='Choose a sport'
			subtitleColor={cssCreateLeague.card.title.subtitleColor}
			title='Create a New League'
			titleColor={cssCreateLeague.card.title.titleColor}
		/>
		<CardActions>
			{sports.map((sport, i) => {
				return (
					<CreateLeagueButton
						active={selectedSport === sport.name}
						icon={sport.icon}
						key={i}
						label={sport.name}
						onClick={onSelect}
					/>
				);
			})
		}
		</CardActions>
	</Card>
);

CreateLeagueSelector.propTypes = {
	onSelect: PropTypes.func,
	selectedSport: PropTypes.string
};

export default CreateLeagueSelector;
