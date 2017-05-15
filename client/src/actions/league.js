import axios from 'axios';
import { FETCH_LEAGUES, CREATE_LEAGUE, SELECT_LEAGUE } from './types';
import { rootURL } from '../../globals';

//Post createLeague form to the server
//Send the response object to a reducer that will append it to a list of user's leagues
//Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch){
		axios.post(`${rootURL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type:CREATE_LEAGUE, payload: data});
			})
			.then(()=> redirectCallback());
	};
}

//Get list of leagues associated with user when homepage loads, and user has been authenticated
export function fetchLeagues(){
	return function(dispatch){
		axios.get(`${rootURL}/league/fetchLeagues`)
			.then(({data}) => { 
				dispatch({ type: FETCH_LEAGUES, payload: data });
			});
	};
}

export function selectLeague(league){
	return {type:SELECT_LEAGUE, payload:league};
}
