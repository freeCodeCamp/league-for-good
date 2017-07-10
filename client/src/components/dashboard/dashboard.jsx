// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LeagueTabs from './leagueTabs/leagueTabs.jsx';
import LeagueTabsHeader from './leagueTabs/leagueTabsHeader.jsx';
import { cssContent, cssDashboard } from '../style';
import CircularProgress from 'material-ui/CircularProgress';


class Dashboard extends Component {

	render() {

		if (this.props.isLoading) {
			return <CircularProgress style={cssDashboard.loading} />; 
		}
		const { league, history } = this.props;
		const tabProps = { league, history, leagueId: league._id };


		return (

			<div>
				{league.name &&
				<div style={cssContent.header}>
					<LeagueTabsHeader league={league}/>
					<LeagueTabs {...tabProps} />
				</div>
				}
			</div>
		);
	}
}

Dashboard.propTypes = {
	history: PropTypes.object,
	isLoading: PropTypes.bool,
	league: PropTypes.object
};

function mapStateToProps(state) {

	return {
		league: state.league.selected,
		isLoading: state.isLoading
	};
}

export default connect(mapStateToProps)(Dashboard);
