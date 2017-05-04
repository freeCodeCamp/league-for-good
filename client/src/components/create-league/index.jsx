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
	constructor(props) {
		super(props);
		
		this.state = {
			leagueName: ''
		};
	}
	
	onClick(sport) {
		this.props.createLeague(sport);
	}
	
	handleChange(event) {
		this.setState({
			leagueName: event.target.value
		});
	}
	
	onSubmit() {
		const name = this.state.leagueName;
		const sportType = this.props.league.sportType;
		
		const body = {
			name, sportType
		};
		
		axios.post('/league/create', body)
			.then((response) => {
				console.log(response.data);
			}).catch(() => {
				console.log('error client side');
			});
	}

	render() {
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
										label={sport.name}
										icon={sport.icon}
										onClick={this.onClick.bind(this)}
									/>; 
						})}
					</CardActions>
				</Card>
				<CreateLeagueCardForm 
					sportType={this.props.league.sportType}
					leagueName={this.state.leagueName}
					onChange={this.handleChange.bind(this)}
					onSubmit={this.onSubmit.bind(this)}
				/>
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