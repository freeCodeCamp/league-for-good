import { reset, submit } from 'redux-form';
import { OPEN_SNACKBAR } from './types';
//a mapping of success messages. Will be moved to it's own file

const getGessage = ({values, form}) => {
	
	const { first_name, last_name, name } = values;

	const messages = {
		EditTeamForm: `The team - '${name}' - has been updated`,
		AddTeamForm: 'A new team was successfully added to your league.',
		AddPlayerForm: `${first_name} ${last_name} has been successfully added to your league`,
		UpdatePlayerForm: `${first_name} ${last_name} has been successfully updated`,
		AddStaffForm:'Congrats',
		AssignPlayerForm: 'Successfully assigned a new player',
	};

	return messages[form];
};

//Action to trigger the snackbar component once a form submits successfully

export function openSnackbar(results, dispatch, props){
	const form = props.form;

	const message = getGessage(props);

	dispatch({ type: OPEN_SNACKBAR, message });
	
	dispatch(reset(form));
}
