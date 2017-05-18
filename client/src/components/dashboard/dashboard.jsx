// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLeagues} from '../../actions/index';
import LeagueTabs from './leagueTabs.jsx';
import LeagueTabsHeader from './dashboardHeader.jsx';

class Dashboard extends Component {

	render() {
		const { league, view } = this.props;
		
		return (
			<div style={{height: 'auto'}}>
				{league &&
				<div>
					<LeagueTabsHeader league={league}/>
					<LeagueTabs league={league} view={view}/>
				</div>
				}
			</div>
		);
	}
}

function mapStateToProps({ league, teams }){
	return { league: league.selected, view: teams.view };
}


export default connect(mapStateToProps)(Dashboard);
