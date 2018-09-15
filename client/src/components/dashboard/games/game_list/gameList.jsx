// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGames } from '../../../../actions/index';
import PropTypes from 'prop-types';
import { cssContent } from '../../../styles';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import RaisedButton from 'material-ui/RaisedButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
import { makeTable } from './data';
// import { Link } from 'react-router-dom';
import { NEW_GAME as route } from '../../../routes';

function formatSubtitle(season) {
	const { startDate, endDate } = season;
	const dString = d => new Date(d).toDateString();

	return `${dString(startDate)} - ${dString(endDate)}`;
}

const GameList = props => {
	// const { season, history } = props;
	const { season } = props;
	return (
		<div style={cssContent.body}>
			{
				props.season.active &&
				<RaisedButton
					label='New Game'
					onClick={() => props.history.push({pathname: route, state: {season}})}
					primary={true}
					style={{marginLeft: 15}}
				/>
			}
			<TableTemplate
				headers={props.headers}
				rows={props.rows}
				subtitle={formatSubtitle(season)}
				title={`${season.name} Games`}
			/>
		</div>
	);
};


const selector = makeTable();

function mapStateToProps(state, ownProps) {

	const { rows, headers, season } = selector(state, ownProps);
	return { rows, headers, season };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchGames }, dispatch);
}

GameList.propTypes = {
	headers: PropTypes.array,
	history: PropTypes.object,
	loading: PropTypes.bool,
	rows: PropTypes.arrayOf(PropTypes.array),
	season: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
