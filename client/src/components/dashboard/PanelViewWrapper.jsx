import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

export default class PanelViewWrapper extends Component {

	render() {
		const {view, league} = this.props;
		
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
						teams={league.active_teams.concat(league.archived_teams)}
					/>
				);
			default:
				return <noScript />;
		};
	}
}


