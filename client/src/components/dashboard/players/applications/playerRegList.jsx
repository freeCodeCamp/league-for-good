import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import { getPlayerRegistrations } from './data.jsx';
import { cssContent } from '../../../styles';


const PlayerRegistrationList = props => {

	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={props.headers}
				rows={props.rows}
				title='Player Registrations'
			/>
		</div>
	);
};

PlayerRegistrationList.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	rows: PropTypes.arrayOf(PropTypes.array)
};

const getPlayerList = getPlayerRegistrations();

function mapStateToProps(state) {
	const { rows, headers } = getPlayerList(state);
	return { rows, headers };
}

export default connect(mapStateToProps)(PlayerRegistrationList);
