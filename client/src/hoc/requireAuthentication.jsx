import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import { initAuthState } from '../actions/index';
import { Redirect } from 'react-router-dom';
import { cssLoading } from '../components/styles';

import PropTypes from 'prop-types';


/*
  Higher order component that ensures no part of the app is in a 'load state'
  If the application is loading it will render a loading view


  Currently this function is only used when the application is initially
	started to hide any state changes while an authentication call
	to the server is being resolved

  Can be applied during other Async calls

  @composedComponent -
  @userProps([Functions]) - user defined props to pass to composed component
*/

export default function(ComposedComponent) {
	class loadState extends Component {

		renderSpinner() {
			return (
				<div style={cssLoading.style}>
					<CircularProgress size={cssLoading.size} />
				</div>
			);
		}

		componentWillMount() {
			// Get authentication status from the server
			// Switches off the loading state when a success response is received
			this.props.initAuthState();
		}

		render() {
			const { loggedIn, ...props } = this.props;
			if (props.loading) {
				return this.renderSpinner();
			} else if (!loggedIn) {
				// Redirect instantly if the user is not logged in
				return <Redirect to='/login' />;
			} else {
				// Render the desired content
				return <ComposedComponent {...props} />;
			}
		}
	}

	loadState.propTypes = {
		initAuthState: PropTypes.func,
		loggedIn: PropTypes.bool
	};

	function mapStateToProps({ auth, menu }) {

		const { loggedIn, loading } = auth;
		return { loggedIn, loading, menuOpen: menu.open };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({ initAuthState }, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(loadState);
}


