import React from 'react';
import { Route } from 'react-router-dom';

import  * as Links  from '../../routes';

import PlayerList from './player_list/playerList.jsx';
import PlayerDetails from '../players/player_list/playerDetails.jsx';
import PlayerForm from './forms/playerForm.jsx';
import AssignPlayer from './forms/assignToTeamForm.jsx';
import PlayerRegList from './applications/playerRegList.jsx';
import PlayerRegDetails from './applications/playerRegDetails.jsx';

const PlayerRoutes = props => (
	<div>
		<Route exact path={Links.PLAYER_LIST} component={PlayerList}/>
		<Route path={Links.PLAYER_DETAIL} component={PlayerDetails} />
		<Route path={Links.PLAYER_ASSIGN_FORM} component={AssignPlayer}/>
		<Route path={Links.PLAYER_ADD_FORM} component={PlayerForm}/>
		<Route path={Links.PLAYER_UPDATE_FORM} component={PlayerForm}/>
		<Route exact path={Links.PLAYER_REGISTRATION_LIST} component={PlayerRegList}/>
		<Route path={Links.PLAYER_REGISTRATION_DETAILS} component={PlayerRegDetails}/>
	</div>	
);

export default PlayerRoutes;
