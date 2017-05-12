import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';

import { sports } from '../sports.js';
import { sportButtonStyle, sportIconStyle } from './createLeagueCSS.js';


// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={sportIconStyle} />
);


// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton 
		label={props.label}
		backgroundColor={props.active ? "orange" : "lightblue"}
		hoverColor={props.active ? "orange" : "#FFCC80"}
		disableTouchRipple={true}
		style={sportButtonStyle}
		onTouchTap={() => props.onClick(props.label)}
		icon={<CreateLeagueIcon icon={props.icon} />}
	/>
);


// Creates a list of different buttons for selecting a sport type for the new league
const SportTypeSelector = ({onSelect, selectedSport})=> (
	<Card >
		<CardTitle 
			title="Create a New League"
			subtitle="Choose a sport"
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
)



export default SportTypeSelector;
