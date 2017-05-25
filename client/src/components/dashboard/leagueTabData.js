// Store all the information for the links for each tab
import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import AddPersonIcon from 'material-ui/svg-icons/social/person-add';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ArchiveIcon from 'material-ui/svg-icons/content/archive';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import UpdateIcon from 'material-ui/svg-icons/action/update';

// Links that the user can access to modify teams
const teamLinks = [
	{
		description: 'Add new teams to your league.',
		label: 'AddTeam',
		icon: <AddIcon />,
	},
	{
		description: 'Manage active teams in your league.',
		label: 'EditActiveTeam',
		icon: <EditIcon />,
	},
	{
		description: 'Manage archived teams in your league.',
		label: 'EditArchivedTeam',
		icon: <ArchiveIcon />,
	},
	{
		description: 'Delete teams from your league.',
		label: 'DeleteTeam',
		icon: <DeleteIcon />,
	},
];

// Links that the user can access to modify players
const playerLinks = [
	{
		description: 'Add a new player to your league.',
		label: 'AddPlayer',
		icon: <AddPersonIcon />,
	},
	{
		description: 'Email a form to allow players to register for your league.',
		label: 'EmailPlayer',
		icon: <EmailIcon />,
	},
	{
		description: 'Assign a player to a team.',
		label: 'AssignPlayer',
		icon: <AssignmentIcon />,
	},
	{
		description: 'Update a players contact information.',
		label: 'UpdatePlayer',
		icon: <UpdateIcon />,
	},
];

// Links for managing general league settings
const settingsLinks = [
	{
		description: 'Add a new staff member to log into the dashboard.',
		label: 'AddStaff',
		icon: <AddPersonIcon />,
	},
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', links: teamLinks },
	{ name: 'Players', links: playerLinks },
	{ name: 'Seasons', links: [] },
	{ name: 'Settings', links: settingsLinks },
];
