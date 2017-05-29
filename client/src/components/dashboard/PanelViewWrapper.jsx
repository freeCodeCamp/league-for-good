import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

import AddPlayerForm from './players/addPlayerForm.jsx';
import TeamRoster from './players/roster.jsx';

import AddStaffForm from './settings/main.jsx';



// Panel view wrapper determines which view is currently active
// and renders the appropriate panel in response
export default class PanelViewWrapper extends Component {

	render() {
		const { view, league, roster, teams } = this.props;
		// since each panel view wrapper has its own set of links, we must
		// check if the panels links match the current view being rendered
		// this will prevent unnecessary rendering
		if (!this.props.tab.links.some((link) => link.label === view)) {
			return <noScript />;
		}
		
		switch (view) {
			case 'AddTeam':
				return <AddTeamForm league={league} />;
			case 'EditActiveTeam':
				return (
					<TeamTable
						action="edit" 
						teams={league.active_teams} 
						title="Active Teams"
					/>
				);
			case 'EditArchivedTeam':
				return (
					<TeamTable 
						action="edit" 
						teams={league.archived_teams} 
						title="Archived Teams"
					/>
				);
			case 'DeleteTeam':
				return (
					<TeamTable 
						action="delete"
						title="Delete Teams" 
						teams={teams}
					/>
				);

			case 'AddStaff':
				return <AddStaffForm league={league}/>;	

			case 'AddPlayer':
				return <AddPlayerForm league={league} roster={roster} />;
		
			case 'ViewRoster':
				return <TeamRoster teams={teams} roster={roster} />		
			default:
				return <noScript />;
			}
		}
}


