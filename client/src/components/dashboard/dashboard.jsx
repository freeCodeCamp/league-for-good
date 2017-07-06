// The dashboard component contains the management UI for the user
// to modify the league and its properties
import React, {Component} from 'react';
import {connect} from 'react-redux';

import LeagueTabs from './leagueTabs/leagueTabs.jsx';
import LeagueTabsHeader from './leagueTabs/leagueTabsHeader.jsx';
import { css_content } from '../style';


class Dashboard extends Component {

	render() {
		const { league, history } = this.props;
		const tabProps = { league, history, leagueId: league._id };
		
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

function mapStateToProps({ league: {selected} }){
	
	return { league: selected };
}


export default connect(mapStateToProps)(Dashboard);
