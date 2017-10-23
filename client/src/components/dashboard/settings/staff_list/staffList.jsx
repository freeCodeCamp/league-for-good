import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { connect } from 'react-redux';
import getStaffTableRows, { colData } from './staffData';

import { cssContent } from '../../../styles';

const StaffList = props => {
	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={colData}
				rows={getStaffTableRows(props.staff, props.leagueId)}
			/>
		</div>
	);
};

StaffList.propTypes = {
	leagueId: PropTypes.string,
	staff: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
	return {
		staff: state.settings.staff,
		leagueId: state.league.selected
	};
}

export default connect(mapStateToProps)(StaffList);
