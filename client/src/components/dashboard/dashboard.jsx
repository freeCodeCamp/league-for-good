// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeManageView } from '../../actions/index';
import LeagueTabs from './leagueTabs.jsx';
import LeagueTabsHeader from './leagueTabsHeader.jsx';
import { css_content } from '../style';

import { partition } from 'lodash';
//import { createSelector } from 'reselect';

class Dashboard extends Component {

	render() {
		const { league, view, changeManageView } = this.props;
		const tabProps = { league, view, changeManageView};
		
		return (
			<div>
				{league.name &&
				<div style={css_content.header}>
					<LeagueTabsHeader league={league}/>
					<LeagueTabs {...tabProps} />
				</div>
				}
			</div>
		);
	}
}

//function passed to the lodash method 'partition' to split the 'teams' state into seperate
//arrays based on active status

// ----https://lodash.com/docs/4.17.4#partition


function mapStateToProps({ league, manage, teams }){
	const { selected } = league;
	
	const teamArrays = partition(teams, 'currently_active');
	let [active_teams, archived_teams] = teamArrays;
	
	const leagueObj = { ...selected, archived_teams, active_teams};

	return { league: leagueObj, view: manage.view };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeManageView}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
