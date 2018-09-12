import React from 'react';
import PropTypes from 'prop-types';
import { cssContent, cssDashboard } from '../../../styles';

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
		<div style={cssContent.body}>
			<IconButton
				onClick={() => history.goBack()}
				tooltip='Back to team roster'
				>
				<BackArrow />
			</IconButton>
			<h1 style={cssDashboard.title}>
				{player.fullName}
			</h1>
			<h4 style={cssDashboard.players.title}>Email: {player.email}</h4>
			<h4 style={cssDashboard.players.title}>Phone: {player.phoneNum}</h4>

			<hr/>
			<h3 style={cssDashboard.players.title}>Teams:</h3>
			{
				player.teams.map(team => (
					<div key={team.teamId} style={cssDashboard.players.details}>
						<h4>Team Id: {team.teamId}</h4>
						<h4>Season Id: {team.seasonId}</h4>
						<h4>Jersey Number: {team.jerseyNum}</h4>
						<h4>Positions: {team.position.join(', ')}</h4>
						<hr/>
					</div>
					// TO DO
					// * Populate teams in players teams on server so
					// 	 the team name can be rendered in place of teamId
					// * Seed Season data into db so same can be done with season
				))
			}
		</div>
	);
};

Player.propTypes = {
	history: PropTypes.object,
	player: PropTypes.object
};

function mapStateToProps({ players }) {

	return { player: players.selected };
}

export default connect(mapStateToProps)(Player);
