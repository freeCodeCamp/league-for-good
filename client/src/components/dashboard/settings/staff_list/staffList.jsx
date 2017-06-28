import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { connect } from 'react-redux';
import getStaffTableRows, { colData } from './staffData';

import { css_content } from '../../../style.js';

const StaffList = props => {
	return (
		<div style={css_content.body}>
			<TableTemplate
				headers={colData}
				rows={getStaffTableRows(props.staff, props.leagueId)}
			/>
		</div>
	);
};

function mapStateToProps(state) {
	console.table(state.settings);
	return {
		staff: state.settings.staff,
		leagueId: state.league.selected._id
	};
}

export default connect(mapStateToProps)(StaffList);
