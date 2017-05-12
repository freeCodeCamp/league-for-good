import { reset } from 'redux-form';

//Action to trigger the snackbar component once a form submits successfully

export function openSnackbar( results, dispatch ){

	const { formName, message } = this;
	
	dispatch({ type: 'OPEN_SNACKBAR', payload: message });
	
	dispatch( reset(formName));
	
};