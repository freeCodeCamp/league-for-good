// Store all the information for the links for each tab
import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import AddPersonIcon from 'material-ui/svg-icons/social/person-add';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteForeverIcon from 'material-ui/svg-icons/action/delete-forever';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import ListIcon from 'material-ui/svg-icons/action/view-list';

import * as LINK from '../../routes';

// Links that the user can access to modify teams
const teamLinks = [
	{
		description: 'View your current teams.',
		label: 'ViewTeams',
		icon: <ListIcon />,
		url: LINK.TEAM_LIST,
	},
	{
		description: 'Add new teams to your league.',
		label: 'AddTeam',
		icon: <AddIcon />,
		url: LINK.TEAM_ADD_FORM,
	},
];

// Links that the user can access to modify players
const playerLinks = [
	{
		description: 'View a list of all players.',
		label: 'ViewPlayers',
		icon: <ListIcon />,
		url : LINK.PLAYER_LIST,
	},
	{
		description: 'Manually add a new player to your league.',
		label: 'AddPlayer',
		icon: <AddPersonIcon />,
		url: LINK.PLAYER_ADD_FORM,
	},
	{
		description: 'View Player Registrations',
		icon: <EmailIcon />,
		url: LINK.PLAYER_REGISTRATION_LIST,
	},
	{
		description: 'Assign a player to a team.',
		url: LINK.PLAYER_ASSIGN_FORM,
		icon: <AssignmentIcon />,
	},
];

// Links for managing general league settings
const settingsLinks = [
	{
		description: 'View a list of all staff members.',
		label: 'ViewStaff',
		icon: <ListIcon />,
		url: LINK.SETTINGS_STAFF_LIST,
	},
	{
		description: 'Add a new staff member to manage your league.',
		label: 'AddStaff',
		icon: <AddPersonIcon />,
		url: LINK.SETTINGS_ADD_STAFF_FORM,
	},
	{
		description: 'Delete your league.',
		label: 'DeleteLeague',
		icon: <DeleteForeverIcon />,
		url: LINK.SETTINGS_DELETE_LEAGUE,
	},
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', links: teamLinks },
	{ name: 'Players', links: playerLinks },
	{ name: 'Seasons', links: [] },
	{ name: 'Settings', links: settingsLinks },
];
