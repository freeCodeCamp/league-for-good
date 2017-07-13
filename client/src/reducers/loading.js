import { SET_LOADING_STATE } from '../actions/types';

export default function(state = false, action) {
	switch (action.type) {

	case SET_LOADING_STATE:
		return action.loading;
	default:
		return state;
	}
}
