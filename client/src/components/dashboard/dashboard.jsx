// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLeagues} from '../../actions/index';
import LeagueTabs from './leagueTabs.jsx';
import LeagueTabsHeader from './leagueTabsHeader.jsx';
import { css_content } from '../style';

class Dashboard extends Component {

	render() {
		const { league, view } = this.props;
		
		return (
			<div>
				{league.name &&
				<div style={css_content.header}>
					<LeagueTabsHeader league={league}/>
					<LeagueTabs league={league} view={view}/>
				</div>
				}
			</div>
		);
	}
}

function mapStateToProps({ league, teams, manage }){
	const { selected } = league;
	const { active_teams, archived_teams } = teams;
	const leagueObj = { ...selected, active_teams, archived_teams };
	
	return { league: leagueObj, view: manage.view };
}


export default connect(mapStateToProps)(Dashboard);
