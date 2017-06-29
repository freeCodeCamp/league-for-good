import axios from 'axios';
import { REMOVE_REGISTRATION, ADD_PLAYER, CLOSE_MODAL } from '../types';
import { ROOT_URL } from '../../../globals';

export function confirmPlayerRegistration(reqBody) {
	return dispatch => 
		axios.put(`${ROOT_URL}/register/confirm`, reqBody)
			.then(({data}) => 
				dispatch({type: REMOVE_REGISTRATION, payload: reqBody.player._id})
			)
			.then(() => dispatch({type: ADD_PLAYER, payload: reqBody.player}))
			.then(() => dispatch({type: CLOSE_MODAL}));
}