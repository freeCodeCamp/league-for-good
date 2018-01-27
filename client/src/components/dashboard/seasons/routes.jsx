import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';

import SeasonList from './season_list/seasonList.jsx';
import AddSeasonForm from './forms/addSeasonForm.jsx';
import UpdateActiveTeams from './forms/updateActiveTeams.jsx';

import GameList from '../games/game_list/gameList.jsx';
import NewGameForm from './games/NewGameForm.jsx'
import EditGameForm from './games/EditGameForm.jsx';

const SeasonRoutes = () => (
	<div> 
		<Route component={SeasonList} exact={true} path={Links.SEASON_LIST} />
		<Route component={AddSeasonForm} path={Links.SEASON_ADD_FORM} />
		<Route component={UpdateActiveTeams} path={Links.SEASON_CURR_TEAMS} />		
		<Route component={GameList} exact path={Links.SEASON_GAME_LIST}/>
		<Route component={NewGameForm}  path={Links.NEW_GAME}/>
		<Route component={EditGameForm} path={Links.EDIT_GAME}/>
	</div>
);

export default SeasonRoutes;

