import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import Search from './rosterSearch.jsx';
import { css_content } from '../../../style';

import getRowData, { colData } from './rosterData';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

const Roster = props => {
	const { teams, roster } = props;
	const title = roster ? roster.name : 'Search';

	if (!roster){
		return (
			<div style={css_content.body}>
				Loading...
			</div>
		);
	}

	return (
		<div style={css_content.body}>
			<IconButton 
				onTouchTap={() => props.history.goBack()}
				tooltip="Back to teams list"
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
}

function mapStateToProps({ roster }){
	return { roster };
}

export default connect(mapStateToProps)(Roster);
