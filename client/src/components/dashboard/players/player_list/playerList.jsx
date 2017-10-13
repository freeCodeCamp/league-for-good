import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { configPlayerListForTable } from './playerData.jsx';
import { cssContent } from '../../../styles';


export const PlayerList = props => {
	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={props.headers}
				rows={props.rows}
			/>
		</div>
	);
};

PlayerList.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	rows: PropTypes.arrayOf(PropTypes.array)
};

const getPlayerList = configPlayerListForTable();

function mapStateToProps(state) {
	const { rows, headers } = getPlayerList(state);
	return { headers, rows };
}

export default connect(mapStateToProps)(PlayerList);
