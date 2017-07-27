import axios from 'axios';
import { UPDATE_PLAYER, CLOSE_MODAL } from '../types';
import { ROOT_URL } from '../../../globals';

export function confirmPlayerRegistration(props) {

	let { player } = props;

	const updatedPlayer = { ...player, pending: false };
	const reqBody = {
		player: {
			query: { _id: player._id },
			update: { pending: false }
		},
		team: {}
	};

	return dispatch => {
		axios.put(`${ROOT_URL}/player/update`, reqBody)
			.then(() =>
				dispatch({type: UPDATE_PLAYER, updatedPlayer })
			)
			.then(() => dispatch({ type: CLOSE_MODAL }));
	};

}
