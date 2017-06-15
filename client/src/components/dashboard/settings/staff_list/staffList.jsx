import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { connect } from 'react-redux';
import getStaffTableRows, { colData } from './staffData';

import { css_content } from '../../../style.js';

/*
			<TableTemplate 
				headers={colData}
				rows={getRowData( props.players )}
			/>
			*/
const StaffList = props => {
	return (
		<div style={css_content.body}>
			<TableTemplate
				headers={colData}
				rows={getStaffTableRows(props.staff)}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return { staff: state.league.selected.staff };
}

export default connect(mapStateToProps)(StaffList);
