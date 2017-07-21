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
	const { teams, history, location: { state: { leagueId }}} = props;
	const { importActiveTeams, ...formVals } = form;
	const url = `${ROOT_URL}/seasons/create/${leagueId}`;
	let body = { ...formVals, leagueId };

	if (importActiveTeams) {
		body.teams = teams.filter(team => team.currentlyActive);
	}


	axios.post(url, body)
			.then(({data}) =>
				dispatch({ type: CREATE_SEASON, newSeason: data })
			)
			.then(() => history.goBack())
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

export function editSeason(form, dispatch) {
	const url = `${ROOT_URL}/seasons/update/${form._id}`;


	let { startDate, endDate, name } = form;
	const now = Date.now();

	startDate = new Date(startDate);
	endDate = new Date(endDate);

	form.active = (now >= Date.parse(startDate)
		&& now <= Date.parse(endDate));

	dispatch({ type: CLOSE_MODAL });

	axios.put(url, { startDate, endDate, name })
		.then(() => {
			dispatch({ type: UPDATE_SEASON, season: form });
		});

}

export function updateTeamsInSeason(teams, dispatch, props) {
	const { season: {currSeason}, history } = props;
	const url = `${ROOT_URL}/seasons/update/${currSeason._id}`;
	let addTeams = [];

	for (let id in teams) {
		if (teams[id]) {
			addTeams.push(id);
		}
	}

	currSeason.teams = addTeams;

	const requestBody = { $set: { teams: addTeams }};

	axios.put(url, requestBody)
		.then(()=>
			dispatch({ type: UPDATE_SEASON, currSeason })
		)
		.then(() => history.goBack());
}
