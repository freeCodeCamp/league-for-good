// Actions related to changing views on the management panels
import { CHANGE_MANAGE_VIEW, RESET_DASHBOARD } from './types';

// Track which view is active in the management panels
export function changeManageView(view) {
	return { type: CHANGE_MANAGE_VIEW, view: view };
}

// Reset the active view when a user selects a new league
export function resetDashboard(){
	return { type: RESET_DASHBOARD };
}
