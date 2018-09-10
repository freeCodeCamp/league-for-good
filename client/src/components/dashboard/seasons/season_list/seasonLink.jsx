import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchGames } from '../../../../actions/index';
import {
	SEASON_CURR_TEAMS,
	SEASON_GAME_LIST,
	makeLinkDynamic
} from '../../../routes';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { cssDashboard } from '../../../styles';

function handleClick(props, url) {
	if (props.action === 'games') {
		props.fetchGames(props.season._id, {});
		props.history.push(url);
	} else {
		props.history.push(url);
	}
}

const SeasonLink = props => {
	const { action, season } = props;
	let url;

	if (action === 'games') {
		url = { pathname: SEASON_GAME_LIST, state: { season }};
	} else {
		url = makeLinkDynamic(SEASON_CURR_TEAMS, season._id );
	}
	return (
		<IconButton
			hoveredStyle={cssDashboard.table.iconHover}
			onClick={() => handleClick(props, url)}
			>
			<ListIcon />
		</IconButton>

	);
};

SeasonLink.propTypes = {
	action: PropTypes.string,
	season: PropTypes.number
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchGames }, dispatch);
}

export default connect(null, mapDispatchToProps)(SeasonLink);
