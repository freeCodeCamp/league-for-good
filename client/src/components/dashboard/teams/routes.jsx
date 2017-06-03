import React from 'react';
import { Route } from 'react-router-dom';

import  * as Links  from '../../routes';

import TeamTable from './team_list/teamList.jsx';
import TeamRoster from './team_roster_list/rosterList.jsx';
import Player from '../players/player_list/playerDetails.jsx';
import AddTeamForm from './forms/addTeamForm.jsx';

const TeamRoutes = props => (
	<div>
		<Route exact path={Links.TEAM_LIST} component={TeamTable}/>
		<Route path={Links.TEAM_ROSTER} component={TeamRoster} />
		<Route path={Links.TEAM_ROSTER_PLAYER_DETAIL} component={Player} />
		<Route path={Links.TEAM_ADD_FORM} component={AddTeamForm}/>
	</div>	
);

export default TeamRoutes;