import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import getRowData, { colData } from './data.jsx';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { cssContent } from '../../../style.js';


const PlayerList = props => {
	const leagueId = props.location.state.leagueId;
	return (
		<div style={cssContent.body}>
			<IconButton
				onTouchTap={() => props.history.goBack()}
				>
				<BackArrow/>
			</IconButton>
			<TableTemplate
				headers={colData}
				rows={getRowData( props.players, leagueId )}
			/>
		</div>
	);
};

PlayerList.propTypes = {
	history: PropTypes.object,
	location: PropTypes.object,
	players: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
	return { players: state.league.selected.pendingPlayers };
}

export default connect(mapStateToProps)(PlayerList);

