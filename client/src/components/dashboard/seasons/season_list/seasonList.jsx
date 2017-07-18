import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cssContent } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { configSeasonForTable } from './seasonData.selector';


// Table that lists all the seasons and the
	// ability to edit or delete each season
const SeasonList = props => {

	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={props.headers}
				rows={props.seasons}
				title='Seasons'
			/>
		</div>
	);
};

const selector = configSeasonForTable();

function mapStateToProps(state) {

	const { seasons, headers } = selector(state);

	return { seasons, headers };
}

SeasonList.propTypes = {
	headers: PropTypes.array,
	seasons: PropTypes.array
};

export default connect(mapStateToProps)(SeasonList);


