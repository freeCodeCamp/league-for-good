import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import { css_content } from '../../../style';
import getRowData, { colData } from './rosterData';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

import { getRoster } from '../../../../selectors/roster';

const Roster = ({roster, history}) => {

	const title = roster ? roster.name : '';

	if (!roster) {
		return (
			<div style={css_content.body}>
				Loading...
			</div>
		);
	}

	return (
		<div style={css_content.body}>
			<IconButton
				onTouchTap={() => history.goBack()}
				tooltip='Back to teams list'
				>
				<BackArrow/>
			</IconButton>
			<TableTemplate
				title={title}
				headers={colData}
				rows={getRowData( roster.players )}
			/>
		</div>
	);
};

function mapStateToProps(state, props) {
	const rosterSelector = getRoster();

	return { roster: rosterSelector(state, props) };
}

export default connect(mapStateToProps)(Roster);
