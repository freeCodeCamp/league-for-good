// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLeagues} from '../../actions/index';
import LeagueTabs from './leagueTabs.jsx';
import LeagueTabsHeader from './leagueTabsHeader.jsx';

class Dashboard extends Component {

	render() {
		const { league, view } = this.props;
		
		return (
			<div style={{height: 'auto'}}>
				{league.name &&
				<div style={{backgroundColor: '#f4f6f7'}}>
					<LeagueTabsHeader league={league}/>
					<LeagueTabs league={league} view={view}/>
				</div>
				}
			</div>
		);
	}
}

function mapStateToProps({ league, teams }){
	const { selected } = league;
	const { active_teams, archived_teams } = teams;
	const leagueObj = { ...selected, active_teams, archived_teams };
	
	return { league: leagueObj, view: teams.view };
}


export default connect(mapStateToProps)(Dashboard);
