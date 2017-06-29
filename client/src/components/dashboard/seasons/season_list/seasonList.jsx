import React, { Component } from 'react';
import { css_content, css_dashboard } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

import getRowData, { colData } from './seasonData';

import { connect } from 'react-redux';

// Table that lists all the seasons and the ability to edit or delete each season
const SeasonTable = props => {
	console.log('season table', props.seasons);
	const seasons = props.seasons;
	console.log('seasons', seasons);
	return (
		<div style={css_content.body}>	
			<TableTemplate 
				headers={colData}
				rows={getRowData(seasons)}
			/>
		</div>
	);
}

function mapStateToProps(state) {
	return { seasons: state.seasons.list };
}

export default connect(mapStateToProps)(SeasonTable);



