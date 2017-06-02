//All 'action types' are stored here and exported as variables in order to avoid bugs 
//caused by typos when creating actions and reducers

//UI related action types 
export const TOGGLE_MENU = 'Toggle Menu';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_MANAGE_VIEW = 'change manage view';
export const RESET_DASHBOARD = 'RESET_DASHBOARD';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const CHANGE_THEME = 'CHANGE_THEME';

//Authentication action types 
export const INIT_AUTH_STATE = 'InitAuthState';
export const LOG_OUT = 'log out';


//League action types

export const FETCH_LEAGUES = 'fetch leagues';
export const CREATE_LEAGUE = 'create league';
export const SELECT_LEAGUE = 'select league';

// Team action types
export const CREATE_TEAM = 'create team';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const SELECT_TEAMS = 'select teams';
export const UPDATE_TEAM = 'UPDATE_TEAM';

// Player action types
export const ADD_PLAYER = 'ADD_PLAYER';
export const FETCH_PLAYER = 'FETCH_PLAYER';

// Roster action types
export const FETCH_ROSTER = 'FETCH_ROSTER';
export const ADD_PLAYER_TO_ROSTER = 'ADD_PLAYER_TO_ROSTER';
