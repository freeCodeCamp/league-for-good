import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';

import PlayerList from './player_list/playerList.jsx';
import PlayerDetails from '../players/player_list/playerDetails.jsx';
import AddPlayerForm from './forms/addPlayerForm.jsx';
import UpdatePlayerForm from './forms/updatePlayerForm.jsx';
import AssignPlayer from './forms/assignToTeamForm.jsx';
import PlayerRegList from './applications/playerRegList.jsx';
import PlayerRegDetails from './applications/playerRegDetails.jsx';

const PlayerRoutes = () => (
	<div>
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
			component={AddPlayerForm}
			path={Links.PLAYER_ADD_FORM}
		/>
		<Route
			component={UpdatePlayerForm}
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
);

export default PlayerRoutes;
