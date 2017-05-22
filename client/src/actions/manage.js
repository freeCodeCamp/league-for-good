// Actions related to changing views on the management panels
import { CHANGE_MANAGE_VIEW } from './types';

// Track which view is active in the management panels
export function changeManageView(view) {
	return { type: CHANGE_MANAGE_VIEW, payload: view };
}
