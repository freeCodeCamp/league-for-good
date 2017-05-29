import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

import AddPlayerForm from './players/addPlayerForm.jsx';
import TeamRoster from './players/roster.jsx';

import AddStaffForm from './settings/main.jsx';



// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
const PanelViewWrapper = props => {
	const { view, league, roster , teams } = props;

		switch (view) {
		
		case 'AddTeam':
			return <AddTeamForm league={league} />;
				
		case 'ViewTeamsList':
			return <TeamTable teams={teams}/>;
		
		case 'AddStaff':
			return <AddStaffForm league={league}/>;	
		
		case 'AddPlayer':
			return <AddPlayerForm league={league} roster={roster} />;
			
		case 'ViewRoster':
			return <TeamRoster teams={teams} roster={roster} />		
		
		default:
			return <noScript />;
		}
};


export default PanelViewWrapper;


