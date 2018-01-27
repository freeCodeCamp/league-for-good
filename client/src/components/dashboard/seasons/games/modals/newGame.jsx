import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormTemplate from '../formTemplate.jsx';
import { getNewFormVals } from '../formData';
import { addGame, openSnackbar } from '../../../../../actions/index';


const selector = getNewFormVals();

function mapStateToProps(state, ownProps) {
	return {...selector(state, ownProps)}
}

const NewGameForm = reduxForm({
	form: 'AddGameForm',
	onSubmit: addGame,
	onSubmitSuccess: openSnackbar
})(FormTemplate);

export default connect(mapStateToProps)(NewGameForm)

