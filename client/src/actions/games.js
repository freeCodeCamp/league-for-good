import axios from 'axios';
import { ROOT_URL } from '../../globals';
import {
	ADD_GAME,
	DELETE_GAME,
	FETCH_GAMES,
	UPDATE_GAME
} from './types';

export function addGame(values, dispatch) {
	const seasonId = values.seasonId;

	axios.post(`${ROOT_URL}/games/new`, values )
		.then(({data}) => {
			dispatch({type: ADD_GAME, seasonId, newGame: data });
		})
		.catch(err => console.error({ error: err }));
}

export function removeGame({ game, seasonId }) {
	const gameId = game._id;

	return dispatch => {
		dispatch({ type: 'CLOSE_MODAL' });
		axios.delete(`${ROOT_URL}/games/remove/${gameId}`)
			.then(() =>
				dispatch({ type: DELETE_GAME, gameId, seasonId })
			)
			.catch(err => console.log(err));
	};
}

export function fetchGames(seasonId, games) {
	// if (games[seasonId]) {
	// 	return {
	// 		type: 'FETCH_GAMES',
	// 		list: games[seasonId]
	// 	};
	// }

	return dispatch => {

		// dispatch({ type: SET_LOADING_STATE, loading: true });

		axios
			.get(`${ROOT_URL}/games/fetch/${seasonId}`)
			.then(({data}) => {
				console.log(data);
				dispatch({ type: FETCH_GAMES, list: data, seasonId });
			})
			// .then(() =>
			// 	dispatch({ type: SET_LOADING_STATE, loading: false })
			// )
			.catch(e => { console.log({ error: e });});
	};
}

export function editGame(values, dispatch) {
	const seasonId = values.seasonId;
	const gameId = values._id;

	axios.put(`${ROOT_URL}/games/update/${gameId}`, values )
		.then(() =>
			dispatch({
				type: UPDATE_GAME,
				seasonId,
				gameId,
				newGame: values
			})
		)
		.catch(err => console.error({ error: err }));
}
