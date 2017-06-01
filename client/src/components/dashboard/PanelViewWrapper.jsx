import React from 'react';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

import AddPlayerForm from './players/addPlayerForm.jsx';
import TeamRoster from './players/roster.jsx';

import AddStaffForm from './settings/main.jsx';

import { Route } from 'react-router-dom';


// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
const PanelViewWrapper = props => {
	const { view, league } = props;

		switch (view) {
		
		case 'AddTeam':
			return <AddTeamForm league={league} />;
				
		case 'ViewTeams':
			return (
				<div>
					<Route exact path="/dashboard" component={TeamTable}/>
					<Route path="/dashboard/roster/:teamId" component={TeamRoster}/>
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


