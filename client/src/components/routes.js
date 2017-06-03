//Define all routes pathnames to be used by react-router here

//Player Routes
export const PLAYER_LIST = '/dashboard/players';
export const PLAYER_DETAIL ='/dashboard/players/profile/:playerId';
export const PLAYER_ADD_FORM = '/dashboard/players/create';
export const PLAYER_UPDATE_FORM = '/dashboard/players/update';

//Team Routes
export const TEAM_LIST = '/dashboard/teams';
export const TEAM_ROSTER = '/dashboard/teams/roster/:teamId';
export const TEAM_ROSTER_PLAYER_DETAIL = '/dashboard/teams/player/:playerId'; 
export const TEAM_ADD_FORM = '/dashboard/add-new-team';



//Utility function for replacing the '/:params' tag with the intended tag
//TODO - Make function handle any number of replacements instead of one
export function makeLinkDynamic( link, uniqueID ){
	const regex = /\:\w*/;
	return link.replace( regex, uniqueID);
}