import { CHANGE_THEME } from './types';

// Change the user theme
export function changeTheme(theme) {
	return { type: CHANGE_THEME, theme: theme };
}
