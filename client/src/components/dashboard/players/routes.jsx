import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';

import PlayerList from './player_list/playerList.jsx';
import PlayerDetails from '../players/player_list/playerDetails.jsx';
import AddPlayerForm from './forms/addPlayerForm.jsx';
import AssignPlayer from './forms/assignToTeamForm.jsx';
import PlayerRegList from './applications/playerRegList.jsx';
import PlayerRegDetails from './applications/playerRegDetails.jsx';

const PlayerRoutes = () => (
	<div>
<<<<<<< HEAD
		<Route exact path={Links.PLAYER_LIST} component={PlayerList}/>
		<Route path={Links.PLAYER_DETAIL} component={PlayerDetails} />
		<Route path={Links.PLAYER_ASSIGN_FORM} component={AssignPlayer}/>
		<Route path={Links.PLAYER_ADD_FORM} component={AddPlayerForm}/>
		<Route path={Links.PLAYER_UPDATE_FORM} component={AddPlayerForm}/>
		<Route exact path={Links.PLAYER_REGISTRATION_LIST} component={PlayerRegList}/>
		<Route path={Links.PLAYER_REGISTRATION_DETAILS} component={PlayerRegDetails}/>
	</div>	
=======
		<Route
			component={PlayerList}
			exact={true}
			path={Links.PLAYER_LIST}
		/>
		<Route
			component={PlayerDetails}
			path={Links.PLAYER_DETAIL}
		/>
		<Route
			component={AssignPlayer}
			path={Links.PLAYER_ASSIGN_FORM}
		/>
		<Route
			component={PlayerForm}
			path={Links.PLAYER_ADD_FORM}
		/>
		<Route
			component={PlayerForm}
			path={Links.PLAYER_UPDATE_FORM}
		/>
		<Route
			component={PlayerRegList}
			exact={true}
			path={Links.PLAYER_REGISTRATION_LIST}
		/>
		<Route
			component={PlayerRegDetails}
			path={Links.PLAYER_REGISTRATION_DETAILS}
		/>
	</div>
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
);

export default PlayerRoutes;
