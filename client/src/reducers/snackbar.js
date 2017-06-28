import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/types';

/*
	SnackBar State (popup at the bottom of the screen)

	open    : [Boolean] - snackBar open state
	message : [String] - any text to be rendered inside SnackBar
*/
export default function(state = { open: false, message: '' }, action) {
	switch (action.type) {

	case OPEN_SNACKBAR:
		return { open: true, message: action.message };

	case CLOSE_SNACKBAR:
		return {open: false, message: '' };
	}

	return state;
}
