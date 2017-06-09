import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { css_content, css_dashboard } from '../../../style';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

const Player = ({ player, history }) => {

	if (!player) {
		return (
			<h2>...Loading</h2>
		);
	}

	return (
		<div style={css_content.body}>
			<IconButton 
				onTouchTap={() => history.goBack()}
				tooltip="Back to team roster"
			>
				<BackArrow />
			</IconButton>
			<h1 style={css_dashboard.players.title}>
				{player.full_name}
			</h1>
			<h4>Email: {player.email}</h4>
			<h4>Phone: {player.phone_num}</h4>

			<hr/>
			<h3 style={css_dashboard.players.title}>Teams:</h3>
			{
				player.teams.map(team => (
					<div key={team.teamId}>
						<h4>Team Id: {team.teamId}</h4>
						<h4>Season Id: {team.seasonId}</h4>
						<h4>Jersey Number: {team.jersey_num}</h4>
						<h4>Positions: {team.position.join(', ')}</h4>
					</div>
					//TO DO
					//Populate teams in players teams on server so the team name can be rendered in place of teamId
					//Seed Season data into db so same can be done with season
				))
			}
		</div>
	);
}

function mapStateToProps({ players }){
	
	return { player: players.selected };
}

export default connect(mapStateToProps)(Player);
