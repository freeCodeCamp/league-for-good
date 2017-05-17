import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './teams/addTeamForm.jsx';
import TeamTable from './teams/teamTable.jsx';

class PanelViewWrapper extends Component {

	render() {
		const {view, league} = this.props;
		
		switch (this.props.view) {
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

// Callback function passed to the connect function to access the form state
function mapStateToProps(state) {
	return { view: state.teams.view, league: state.league.selected };
}

//Decorate component one last time with react-router bindings in order to redirect user
//after a successful form submission
export default connect(mapStateToProps)(PanelViewWrapper);

