import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';

import DeleteLeagueForm from './forms/deleteLeagueForm.jsx';
import AddStaffForm from './forms/addStaffForm.jsx';
import StaffList from './staff_list/staffList.jsx';

const SettingsRoutes = props => (
	<div>
		<Route
			exact={true}
			path={Links.SETTINGS_STAFF_LIST}
			component={StaffList}
		/>
		<Route
			path={Links.SETTINGS_ADD_STAFF_FORM}
			component={AddStaffForm}
		/>
		<Route
			path={Links.SETTINGS_DELETE_LEAGUE}
			component={DeleteLeagueForm}
		/>
	</div>
);

export default SettingsRoutes;
