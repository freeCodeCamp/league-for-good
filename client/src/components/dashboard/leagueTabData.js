// Store all the information for the links for each tab
import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ArchiveIcon from 'material-ui/svg-icons/content/archive';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

// Links that the user can access to modify teams
const teamLinks = [
	{
		title: 'Add Teams',
		description: 'Add new teams to your league.',
		label: 'AddTeam',
		icon: <AddIcon />,
	},
	{
		title: 'Edit Active Teams',
		description: 'Manage active teams in your league.',
		label: 'EditActiveTeam',
		icon: <EditIcon />,
	},
	{
		title: 'Edit Archived Teams',
		description: 'Manage archived teams in your league.',
		label: 'EditArchivedTeam',
		icon: <ArchiveIcon />,
	},
	{
		title: 'Delete Teams',
		description: 'Delete teams from your league.',
		label: 'DeleteTeam',
		icon: <DeleteIcon />,
	},
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', links: teamLinks },
	{ name: 'Players', links: [] },
	{ name: 'Seasons', links: [] },
	{ name: 'Settings', links: [] },
];
