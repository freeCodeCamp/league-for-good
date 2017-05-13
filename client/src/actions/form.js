import { reset } from 'redux-form';

//a mapping of success messages. Will be moved to it's own file

const messages = {
	AddTeamForm: 'A new team was successfully added to your league.',
};


//Action to trigger the snackbar component once a form submits successfully
export function openSnackbar(results, dispatch, props){
	const form = props.form;
	dispatch({ type: 'OPEN_SNACKBAR', payload: messages[form] });
	dispatch(reset(form));
	
}