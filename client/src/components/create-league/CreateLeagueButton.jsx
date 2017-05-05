import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';

//sports icons
import baseballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/baseball.svg';
import footballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/football.svg';
import hockeyIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/puck.svg';
import soccerIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/soccer.svg';
import basketballIcon from 'url-loader?limit=10000!../../assets/images/sports_icons/basketball.svg';

// mapping 
const sports = [
	{name: "Football", link: "/create/football", icon: footballIcon},
	{name: "Basketball", link: "/create/basketball", icon: basketballIcon},
	{name: "Soccer", link: "/create/soccer", icon: soccerIcon},
	{name: "Baseball", link: "/create/baseball", icon: baseballIcon},
	{name: "Hockey", link: "/create/hockey", icon: hockeyIcon}
];

// CSS for a button
const buttonStyle = {
	marginRight: '10px',
	marginBottom: '10px',
	width: '160px',
	height: 'auto',
	textAlign: 'center',
	padding: '5px'
};

// CSS for the icon
const iconStyle = {
	width: '30px',
	height: '30px',
	verticalAlign: 'middle',
	marginRight: '10px',
	marginBottom: '10px',
	width:160,
	textAlign:'center'
};

// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={iconStyle} />
);


// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton 
		label={props.label}
		backgroundColor={props.active?"orange" : "lightblue"}
		hoverColor="#FFCC80"
		disableTouchRipple={true}
		style={buttonStyle}
		onTouchTap={() => props.onClick(props.label)}
		icon={<CreateLeagueIcon icon={props.icon} />}
	/>
);


// Creates list of different buttons for each sport type
const SportTypeSelector = ({onSelect, selectedSport})=> (
	<Card>
		<CardTitle 
			title="Create League"
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