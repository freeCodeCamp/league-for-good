// User actions to add, edit, and delete teams in the league
import { TEAM_MANAGE_VIEW } from './types';

export function changeTeamManageView(view) {
	return { type: TEAM_MANAGE_VIEW, payload: view };
};
