import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import getRowData, { colData } from './playerData';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

const PlayerList = props => {

	return (
		<div>
			<IconButton 
				onTouchTap={() => props.history.goBack()}
			>
				<BackArrow/>
			</IconButton>
			<TableTemplate 
				headers={colData}
				rows={getRowData( props.players )}
			/>
		</div>
	);
}

function mapStateToProps({ players }){
	/*
		Until theres paginating functionality we will 
		only work with a subset of the players list array to avoid long render times
	*/
	const playerList = players.list.slice(0, 25);

	return { players: playerList };
}

export default connect(mapStateToProps)(PlayerList);
