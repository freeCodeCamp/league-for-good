import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createLeague } from '../../actions/index.js';
import axios from 'axios';

import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';

import CreateLeagueCardForm from './CreateLeagueCardForm.jsx';
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

class CreateLeagueCard extends Component {

	onClick(sport) {
		this.props.createLeague(sport);
	}

	render() {
		const {sportType} = this.props.league;
		return (
			<div>
				<Card>
					<CardTitle 
						title="Create League"
						subtitle="Choose a sport"
					/>
					<CardActions>
						{sports.map((sport, i) => {
							return <CreateLeagueButton
										key={i}
										active={sportType == sport.name}
										label={sport.name}
										icon={sport.icon}
										onClick={this.onClick.bind(this)}
									/>; 
						})}
					</CardActions>
				</Card>
				<CreateLeagueCardForm />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { createLeague } = state;
	

	return { league: createLeague };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createLeague}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLeagueCard);