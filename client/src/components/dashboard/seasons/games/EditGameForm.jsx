// import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormTemplate from './formTemplate.jsx';
import { getEditFormVals } from './formData';
import { editGame, redirect } from '../../../../actions/index';


const selector = getEditFormVals();

function mapStateToProps(state, ownProps) {
	return {...selector(state, ownProps)};
}

const EditGameForm = reduxForm({
	form: 'EditGameForm',
	onSubmit: editGame,
	onSubmitSuccess: redirect
})(FormTemplate);

export default connect(mapStateToProps)(EditGameForm);
