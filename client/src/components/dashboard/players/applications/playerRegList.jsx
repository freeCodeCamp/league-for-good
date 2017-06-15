import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import getRowData, { colData } from './data.jsx';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { css_content } from '../../../style.js';

import { getPlayerApplications } from '../../../../selectors/player_registration';

const PlayerList = props => {
	console.log(props.players);
	return (
		<div style={css_content.body}>
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
};

function mapStateToProps(state){
	const playerSelector = getPlayerApplications();
	return { players: playerSelector(state)};
}

export default connect(mapStateToProps)(PlayerList);

