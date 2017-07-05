import React, { Component } from 'react';
import { css_content, css_dashboard } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

import getRowData, { colData } from './seasonData';

import { connect } from 'react-redux';

// Table that lists all the seasons and the ability to edit or delete each season
const SeasonList = props => {

	return (
		<div style={css_content.body}>	
			<TableTemplate
				title="Seasons" 
				headers={colData}
				rows={getRowData(props.seasons)}
			/>
		</div>
	);
}

function mapStateToProps(state) {
	return { seasons: state.seasons.list };
}

export default connect(mapStateToProps)(SeasonList);



