import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cssContent } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import getRowData, { colData } from './seasonData';


// Table that lists all the seasons and the
	// ability to edit or delete each season
const SeasonList = props => {
	console.log(props.seasons);
	return (
		<div style={cssContent.body}>
			<TableTemplate
				headers={colData}
				rows={getRowData(props.seasons)}
				title='Seasons'
			/>
		</div>
	);
};

function mapStateToProps(state) {
	return { seasons: state.seasons.list };
}

SeasonList.propTypes = {
	seasons: PropTypes.array
};

export default connect(mapStateToProps)(SeasonList);


