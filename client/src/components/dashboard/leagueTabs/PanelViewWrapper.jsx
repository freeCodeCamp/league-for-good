import React from 'react';

import AddTeamForm from '../teams/forms/addTeamForm.jsx';
import TeamTable from '../teams/team_list/teamList.jsx';

import AddPlayerForm from '../players/forms/addPlayerForm.jsx';
import TeamRoster from '../teams/team_roster_list/rosterList.jsx';
import Player from '../players/player_list/playerDetails.jsx';
import PlayerList from '../players/player_list/playersListTable.jsx';

import AddStaffForm from '../settings/forms/addStaffForm.jsx';

import { Route } from 'react-router-dom';


// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
const PanelViewWrapper = props => {
	const { view, league, teams, roster } = props;
	return (
		<noScript/>;
	);
		// switch (view) {
							
		// case 'AddStaff':
		// 	return <AddStaffForm league={league}/>;	
		
		// case 'ViewPlayers':
		// 	return <PlayerList/>

		// case 'AddPlayer':
		// 	return ( 
		// 		<AddPlayerForm 
		// 			teams={teams} 
		// 			roster={roster}
		// 			initialValues={{ leagueId: league._id }} 
		// 		/>
		// 	);
			
		// default:
		// 	return <noScript />;
		// }
};


export default PanelViewWrapper;


