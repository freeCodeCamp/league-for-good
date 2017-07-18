import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';

import SeasonList from './season_list/seasonList.jsx';
import AddSeasonForm from './forms/addSeasonForm.jsx';
import UpdateActiveTeams from './forms/updateActiveTeams.jsx';

const SeasonRoutes = () => (
	<div>
		<Route component={SeasonList} exact={true} path={Links.SEASON_LIST} />
		<Route component={AddSeasonForm} path={Links.SEASON_ADD_FORM} />
		<Route component={UpdateActiveTeams} path={Links.SEASON_CURR_TEAMS} />
	</div>
);

export default SeasonRoutes;

