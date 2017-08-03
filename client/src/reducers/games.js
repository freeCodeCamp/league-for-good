import {
	FETCH_GAMES,
	ADD_GAME,
	UPDATE_GAME,
	DELETE_GAME
} from '../actions/types';

export default function(state = {}, action) {
	const { seasonId, list, newGame, gameId} = action;
	switch (action.type) {
		case FETCH_GAMES:
			return {...state, [seasonId]: list };
		case ADD_GAME:
			return { ...state, [seasonId]: [...state[seasonId], newGame] };
		case DELETE_GAME:
			return {
				...state,
				[seasonId]: state[seasonId].filter(g => g._id !== gameId)
			};
		case UPDATE_GAME:
			return {
				...state,
				[seasonId]: state[seasonId]
					.map(game => game._id === gameId ? newGame : game)
			};
		default:
			return state;
	}
}
