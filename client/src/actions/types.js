//All 'action types' are stored here and exported as variables in order to avoid bugs 
//caused by typos when creating actions and reducers

//UI related action types 
export const TOGGLE_MENU = 'Toggle Menu';
export const OPEN_MODAL = 'OPEN_MODAL';

//Authentication action types 
export const INIT_AUTH_STATE = 'InitAuthState';
export const LOG_OUT = 'log out';


//League action types
export const FETCH_LEAGUES = 'fetch leagues';
export const CREATE_LEAGUE = 'create league';
export const SELECT_LEAGUE = 'select league';

// Team action types
export const TEAM_MANAGE_VIEW = 'team manage view';
export const CREATE_TEAM = 'create team';
export const REMOVE_TEAM = 'REMOVE_TEAM';
