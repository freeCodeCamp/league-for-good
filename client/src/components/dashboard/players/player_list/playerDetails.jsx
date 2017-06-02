import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { css_content, css_dashboard } from '../../../style';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

const Player = props => {
	const { roster } = props;
	console.log('roster in player.jsx', roster);
	//const title = player ? player.name : 'Search';
	
	const url = props.match.params;
	const player = roster.players.find(player => {
		return player._id === url.playerId;
	});
	
	console.log('player', player);

	return (
		<div style={css_content.body}>
			<IconButton 
				onTouchTap={() => props.history.goBack()}
				tooltip="Back to team roster"
			>
				<BackArrow />
			</IconButton>
			<h1 style={css_dashboard.players.title}>{player.full_name}</h1>
			<h4>Email: {player.email}</h4>
			<h4>Jersey Number: {player.jersey_num}</h4>
			<h4>Positions:</h4>
			<ul style={css_dashboard.players.ul}>
				{
					player.position.map((position, i) => {
						return <li key={i}>{position}</li>;
					})
				}
			</ul>
		</div>
	);
}

function mapStateToProps({ roster }){
	
	return { roster };
}

export default connect(mapStateToProps)(Player);
