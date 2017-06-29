import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import { cssContent } from '../../../style';
import getRowData, { colData } from './rosterData';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

import { getRoster } from '../../../../selectors/roster';

const Roster = ({roster, history}) => {

	const title = roster ? roster.name : '';

	if (!roster) {
		return (
			<div style={cssContent.body}>
				Loading...
			</div>
		);
	}

	return (
		<div style={cssContent.body}>
			<IconButton
				onTouchTap={() => history.goBack()}
				tooltip='Back to teams list'
				>
				<BackArrow/>
			</IconButton>
			<TableTemplate
				headers={colData}
				rows={getRowData(roster.players)}
				title={title}
			/>
		</div>
	);
};

Roster.propTypes = {
	history: PropTypes.object,
	roster: PropTypes.object
};

function mapStateToProps(state, props) {
	const rosterSelector = getRoster();

	return { roster: rosterSelector(state, props) };
}

export default connect(mapStateToProps)(Roster);
