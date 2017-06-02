import React from 'react';

import AddTeamForm from '../teams/forms/addTeamForm.jsx';
import TeamTable from '../teams/team_list/teamList.jsx';

import AddPlayerForm from '../players/forms/addPlayerForm.jsx';
import TeamRoster from '../teams/team_roster_list/rosterList.jsx';
import Player from '../players/player_list/playerDetails.jsx';

import AddStaffForm from '../settings/forms/addStaffForm.jsx';

import { Route } from 'react-router-dom';


// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
const PanelViewWrapper = props => {
	const { view, league, teams, roster } = props;

		switch (view) {
		
		case 'AddTeam':
			return <AddTeamForm league={league} />;
				
		case 'ViewTeams':
			return (
				<div>
					<Route exact path="/dashboard" component={TeamTable}/>
					<Route path="/dashboard/roster/:teamId" component={TeamRoster} />
					<Route path="/dashboard/player/:playerId" component={Player} />
				</div>
			)
		
		case 'AddStaff':
			return <AddStaffForm league={league}/>;	
		
		case 'AddPlayer':
			return ( 
				<AddPlayerForm 
					teams={teams} 
					roster={roster}
					initialValues={{ leagueId: league._id }} 
				/>
			);
			
		default:
			return <noScript />;
		}
};


export default PanelViewWrapper;


