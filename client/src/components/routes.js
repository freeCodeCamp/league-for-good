// Define all routes pathnames to be used by react-router here

// Player Routes
export const PLAYER_LIST = '/dashboard/players/list';
export const PLAYER_DETAIL = '/dashboard/players/profile/:playerId';
export const PLAYER_ADD_FORM = '/dashboard/players/create';
export const PLAYER_UPDATE_FORM = '/dashboard/players/update/:playerId';
export const PLAYER_ASSIGN_FORM = '/dashboard/players/assign';
export const PLAYER_REGISTRATION_LIST = '/dashboard/players/registration';
export const PLAYER_REGISTRATION_DETAILS =
	'/dashboard/players/registration/:playerId';

// Team Routes
export const TEAM_LIST = '/dashboard/teams/list';
export const TEAM_ROSTER = '/dashboard/teams/roster/:teamId';
export const TEAM_ROSTER_PLAYER_DETAIL = '/dashboard/teams/player/:playerId';
export const TEAM_ADD_FORM = '/dashboard/add-new-team';

// Settings routes
export const SETTINGS_DELETE_LEAGUE = '/dashboard/settings/delete';
export const SETTINGS_ADD_STAFF_FORM = '/dashboard/settings/create';
export const SETTINGS_STAFF_LIST = '/dashboard/settings/staff';


export function makeLinkDynamic( link, uniqueID ) {
	const regex = /\:\w*/;
	return link.replace( regex, uniqueID);
}
/*
	Returns a new link

		@link      [STRING] - Any of the constants listed above
		@uniqueId  [STRING] - The id to insert into the link

		usage:
			let dynamicLink =	makeLinkDynamic( PLAYER_DETAIL, '12345678');

			console.log( dynamicLink )  ==> '/dashboard/players/profile/12345678'
*/

// TODO - Make function handle any number of replacements instead of one
//        (currently one is enough)
