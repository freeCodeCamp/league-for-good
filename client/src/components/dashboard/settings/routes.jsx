import React from 'react';
import { Route } from 'react-router-dom';

import * as Links from '../../routes';


import AddStaffForm from './forms/addStaffForm.jsx';
import StaffList from './staff_list/staffList.jsx';

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
	</div>
);

export default SettingsRoutes;
