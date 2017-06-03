import React from 'react';
import { Route } from 'react-router-dom';

import  * as Links  from '../../routes';

import PlayerList from './player_list/playersListTable.jsx';
import Player from '../players/player_list/playerDetails.jsx';
import AddPlayerForm from './forms/addPlayerForm.jsx';
import UpdatePlayerForm from './forms/updatePlayerForm.jsx';

const PlayerRoutes = props => (
	<div>
		<Route exact path={Links.PLAYER_LIST} component={PlayerList}/>
		<Route path={Links.PLAYER_DETAIL} component={Player} />
		<Route path={Links.PLAYER_ADD_FORM} component={AddPlayerForm}/>
		<Route path={Links.PLAYER_UPDATE_FORM} component={UpdatePlayerForm}/>
	</div>	
);

export default PlayerRoutes;