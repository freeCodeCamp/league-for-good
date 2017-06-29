import axios from 'axios';
import { CLOSE_MODAL, REMOVE_REGISTRATION} from '../types';
import { rootURL } from '../../../globals';

export function deletePlayerRegistration({ player }) {
	return dispatch =>
		axios.delete(`${rootURL}/register/delete/${player._id}`)
			.then(() =>
				dispatch({type: REMOVE_REGISTRATION, payload: player._id})
			)
			.then(() => dispatch({type: CLOSE_MODAL}));
}
