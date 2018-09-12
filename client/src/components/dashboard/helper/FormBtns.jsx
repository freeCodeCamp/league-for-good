import React from 'react';
import PropTypes from 'prop-types';
import { reset } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

const btnContainerStyle = {
	position: 'absolute',
	right: 10,
	bottom: 10
};

/*
	A component containing two buttons to be used with a
	reduxForm component

	1.) Reset - resets form to initial state
	2.) Submit - a submit button that takes a custom label
*/
const FormButtons = props => {
	const { formName, dispatch, submitLabel = 'Submit' } = props;

	return (
		<div style={btnContainerStyle}>
			<RaisedButton
				label='Reset'
				onClick={() => dispatch(reset(formName))}
				secondary={true}
				style={{marginRight: 10}}
			/>
			<RaisedButton
				label={submitLabel}
				primary={true}
				type='submit'
			/>
		</div>
	);
};

// YOU MUST PASS REDUX-FORMS BUILT-IN 'dispatch' FUNCTION
// AS A PROP FOR THIS COMPONENT TO WORK
FormButtons.propTypes = {
	dispatch: PropTypes.func.isRequired,
	formName: PropTypes.string.isRequired,
	submitLabel: PropTypes.string
};

export default FormButtons;
