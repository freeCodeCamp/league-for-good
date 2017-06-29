// User actions to add, edit, and delete seasons in the league
import axios from 'axios';
import { FETCH_SEASON, FETCH_ALL_SEASONS } from './types';
import { rootURL } from '../../globals';

// Get more detailed season info
export function fetchSeason(season) {
	
	const url = `${rootURL}/seasons/details/${season._id}`;

	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				dispatch({ type: FETCH_SEASON, seasonDetails: data });
			});
	};
}

// Retrieve all seasons
export function fetchSeasonList(leagueId) {

	const url = `${rootURL}/seasons/list/${leagueId}`;

	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				console.log('season data', data);
				dispatch({ type: FETCH_ALL_SEASONS, seasonsList: data });
			});
	};
}
