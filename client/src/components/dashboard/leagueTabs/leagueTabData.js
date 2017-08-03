// Store all the information for the links for each tab
import React from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import AddPersonIcon from 'material-ui/svg-icons/social/person-add';
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
		permission: 'viewTeams'
	},
	{
		description: 'Add new teams to your league.',
		label: 'AddTeam',
		icon: <AddIcon />,
		url: LINK.TEAM_ADD_FORM,
		permission: 'createTeams'
	}
];

// Links that the user can access to modify players
const playerLinks = [
	{
		description: 'View a list of all players.',
		label: 'ViewPlayers',
		icon: <ListIcon />,
		url: LINK.PLAYER_LIST,
		permission: 'viewPlayers'
	},
	{
		description: 'Manually add a new player to your league.',
		label: 'AddPlayer',
		icon: <AddPersonIcon />,
		url: LINK.PLAYER_ADD_FORM,
		permission: 'createPlayers'
	},
	{
		description: 'View Player Registrations',
		icon: <EmailIcon />,
		url: LINK.PLAYER_REGISTRATION_LIST,
		permission: 'viewPlayerRegistrations'
	},
	{
		description: 'Assign a player to a team.',
		url: LINK.PLAYER_ASSIGN_FORM,
		icon: <AssignmentIcon />,
		permission: 'assignPlayers'
	}
];

// Links for managing the seasons
const seasonLinks = [
	{
		description: 'View a list of all seasons.',
		label: 'ViewSeasons',
		icon: <ListIcon />,
		url: LINK.SEASON_LIST,
		permission: 'viewSeasons'
	},
	{
		description: 'Add a new season to your league.',
		label: 'AddSeason',
		icon: <AddIcon />,
		url: LINK.SEASON_ADD_FORM,
		permission: 'createSeasons'
	}
];

// Links for managing general league settings
const settingsLinks = [
	{
		description: 'View a list of all staff members.',
		label: 'ViewStaff',
		icon: <ListIcon />,
		url: LINK.SETTINGS_STAFF_LIST,
		permission: 'viewStaff'
	},
	{
		description: 'Add a new staff member to manage your league.',
		label: 'AddStaff',
		icon: <AddPersonIcon />,
		url: LINK.SETTINGS_ADD_STAFF_FORM,
		permission: 'createStaff'
	},
	{
		description: 'Delete your league.',
		label: 'DeleteLeague',
		icon: <DeleteForeverIcon />,
		url: LINK.SETTINGS_DELETE_LEAGUE,
		permission: 'deleteLeague'
	}
];

// Tabs that hold the operations that can be performed
export const tabs = [
	{ name: 'Teams', links: teamLinks },
	{ name: 'Players', links: playerLinks },
	{ name: 'Seasons', links: seasonLinks },
	{ name: 'Settings', links: settingsLinks }
];
