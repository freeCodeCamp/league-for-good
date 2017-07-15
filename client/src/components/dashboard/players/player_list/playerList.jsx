import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import getRowData, { colData } from './playerData.jsx';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { cssContent } from '../../../style.js';

export const PlayerList = props => {

	return (
		<div style={cssContent.body}>
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

PlayerList.propTypes = {
	history: PropTypes.object,
	players: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps({ players }) {

	const playerList = players.list;

	return { players: playerList };
}

export default connect(mapStateToProps)(PlayerList);
