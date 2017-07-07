import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormSubmissionSnackbar extends Component {
	render() {
		return (
			<div>
			<Snackbar
				autoHideDuration={4000}
				message={this.props.message}
				onRequestClose={this.props.handleClose}
				open={this.props.open}
			/>
		</div>
		);
	}
}

FormSubmissionSnackbar.propTypes = {
	handleClose: PropTypes.func,
	message: PropTypes.string,
	open: PropTypes.bool
};

function mapStateToProps(state) {
	const { snackbar: { open, message } } = state;
	return { open, message };
}

function mapDispatchToProps(dispatch) {
	const action = { type: 'CLOSE_SNACKBAR' };
	return { handleClose: ()=> dispatch(action) };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FormSubmissionSnackbar);
