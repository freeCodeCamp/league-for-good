import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cssContent } from '../../../styles';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { configSeasonForTable } from './seasonData.selector';


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

function mapStateToProps(state) {

	const { rows, headers } = selector(state);

	return { rows, headers };
}

SeasonList.propTypes = {
	headers: PropTypes.array,
	rows: PropTypes.array
};

export default connect(mapStateToProps)(SeasonList);


