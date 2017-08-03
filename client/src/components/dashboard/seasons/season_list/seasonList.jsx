import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cssContent } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { configSeasonForTable } from './seasonData.selector.jsx';


// Table that lists all the seasons and the
	// ability to edit or delete each season
const SeasonList = props => {

	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={props.headers}
				rows={props.rows}
				title='Seasons'
			/>
		</div>
	);
};

const selector = configSeasonForTable();

function mapStateToProps(state, ownProps) {

	const { headers, rows } = selector(state, ownProps);

	return { rows, headers };
}

SeasonList.propTypes = {
	headers: PropTypes.array,
	rows: PropTypes.array
};

export default connect(mapStateToProps)(SeasonList);


