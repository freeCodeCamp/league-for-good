import { reset } from 'redux-form';
import { OPEN_SNACKBAR } from './types';
// a mapping of success messages. Will be moved to it's own file

const getMessage = ({values, form}) => {

	const { firstName, lastName, name } = values;
	const playerName = `${firstName} ${lastName}`;

	const messages = {
		EditTeamForm: `The team - '${name}' - has been updated`,
		AddTeamForm: 'A new team was successfully added to your league.',
		AddPlayerForm: `${playerName} has been successfully added to your league`,
		UpdatePlayerForm: `${playerName} has been successfully updated`,
		AddStaffForm: 'A new staff member was successfully added to your league',
		AssignPlayerForm: 'Successfully assigned a new player'
	};

	return messages[form];
};

// Action to trigger the snackbar component once a form submits successfully

export function openSnackbar(results, dispatch, props) {
	const form = props.form;

	const message = getMessage(props);

	dispatch({ type: OPEN_SNACKBAR, message });

	dispatch(reset(form));
}
