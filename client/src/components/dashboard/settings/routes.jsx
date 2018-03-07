import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';


import AddStaffForm from './forms/addStaffForm.jsx';
import StaffList from './staff_list/staffList.jsx';
import EditLeagueNameForm from './forms/editLeageNameForm.jsx';
// SETTINGS_ADD_STAFF_FORM

const SettingsRoutes = () => (
	<div>
		<Route
			component={StaffList}
			exact={true}
			path={Links.SETTINGS_STAFF_LIST}
		/>
		<Route
			component={AddStaffForm}
			path={Links.SETTINGS_ADD_STAFF_FORM}
		/>
		<Route
			component={EditLeagueNameForm}
			exact={true}
			path={Links.SETTINGS_EDIT_LEAGUE_NAME}
		/>
	</div>
);

export default SettingsRoutes;
