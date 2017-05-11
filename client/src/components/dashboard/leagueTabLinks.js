// Store all the information for the links for each tab
import React from 'react';
import { generateCardLinks } from './helper/generateCardLinks.jsx';
import AddIcon from 'material-ui/svg-icons/content/add';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

// Links that the user can access to modify teams
export const teamSections = [
	{
		title: 'Add Teams',
		description: 'Add new teams to your league.',
		label: 'Add',
		icon: <AddIcon />,
	},
	{
		title: 'Edit Teams',
		description: 'Manage teams in your league.',
		label: 'Edit',
		icon: <EditIcon />,
	},
	{
		title: 'Delete Teams',
		description: 'Delete teams from your league.',
		label: 'Delete',
		icon: <DeleteIcon />,
	},
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', component: generateCardLinks(teamSections) },
	{ name: 'Players', component: <noScript /> },
	{ name: 'Seasons', component: <noScript /> },
	{ name: 'Leagues', component: <noScript /> },
];
