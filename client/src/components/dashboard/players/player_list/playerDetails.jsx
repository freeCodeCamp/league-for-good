import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { css_content } from '../../../style';

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
		<div>
			<IconButton 
				onTouchTap={() => props.history.goBack()}
				tooltip="Back to team roster"
			>
				<BackArrow />
			</IconButton>
			<p>{player.full_name}</p>
		</div>
	);
}

function mapStateToProps({ roster }){
	console.log('roster', roster);
	return { roster };
}

export default connect(mapStateToProps)(Player);
