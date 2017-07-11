// User actions to add, edit, and delete seasons in the league
import axios from 'axios';
import { ROOT_URL } from '../../globals';
import {
	FETCH_SEASON,
	FETCH_ALL_SEASONS,
	CREATE_SEASON,
	REMOVE_SEASON,
	UPDATE_SEASON,
	CLOSE_MODAL
} from './types';
// Get more detailed season info
export function fetchSeason(season) {

	const url = `${ROOT_URL}/seasons/details/${season._id}`;

	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				dispatch({ type: FETCH_SEASON, seasonDetails: data });
			});
	};
}

// Retrieve all seasons
export function fetchSeasonList(leagueId) {

	const url = `${ROOT_URL}/seasons/list/${leagueId}`;

	return dispatch => {
		axios.get(url)
			.then(({data}) =>
				dispatch({ type: FETCH_ALL_SEASONS, seasonsList: data })
			);
	};
}

export function createSeason(form, dispatch, props) {
	const leagueId = props.location.state.leagueId;
	const body = { leagueId, ...form };
	const url = `${ROOT_URL}/seasons/create/${leagueId}`;

	axios.post(url, body)
			.then(({data}) =>
				dispatch({ type: CREATE_SEASON, newSeason: data })
			)
			.catch(err => { throw err; });
}

export function deleteSeason(season) {
	const deletedSeason = season._id;
	const url = `${ROOT_URL}/seasons/remove/${deletedSeason}`;

	return dispatch =>
		axios.delete(url)
			.then(() => dispatch({ type: REMOVE_SEASON, deletedSeason }))
			.then(() => dispatch({ type: CLOSE_MODAL }))
			.catch(err => { throw err; });
}

export function updateSeason(form, dispatch) {
	// const url = `${ROOT_URL}/seasons/update/${form.leagueId}`;

	dispatch({ type: UPDATE_SEASON, season: form });

}
