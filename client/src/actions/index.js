import axios from 'axios';

export function initAuthState(){

	return function(dispatch){
		axios.post('/auth/authenticate')
			.then(({data}) => {
				const payload = Object.assign({loading:false}, data);
				dispatch({type:'InitAuthState', payload });
			});
	};
}

export function logOut(){
	return function(dispatch){
		axios.post('/auth/logout')
			.then((data) => {
				dispatch({type:'Log Out'});
			});	
	};
}

export function toggleMenu(){
	return {type:'Toggle Menu'};
}

export function createLeague(sportType) {
	return {type: 'Create League', payload: sportType};
}

