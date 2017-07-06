import axios from 'axios';
import {  CREATE_LEAGUE, SELECT_LEAGUE, REMOVE_LEAGUE } from './types';
import { ROOT_URL } from '../../globals';

//Post createLeague form to the server
//Send the response object to a reducer that will append it to a list of user's leagues
//Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type: CREATE_LEAGUE, newLeague: data});
			})
			.then(()=> redirectCallback());
	};
}

export function deleteLeague(_, dispatch, props) {
	const { history, location: { state: { leagueId }}} = props;
	const url = `${ROOT_URL}/league/remove/${leagueId}`;
	const action = { type: REMOVE_LEAGUE, leagueId };

	axios.delete(url)
		.then(response => {
			console.log(response)
			dispatch(action)
		})
		.then(() => history.push('/'))
		.catch(err => { throw err })
}

export function selectLeague(leagueData) {
	
	return { type: SELECT_LEAGUE, leagueData };
}
