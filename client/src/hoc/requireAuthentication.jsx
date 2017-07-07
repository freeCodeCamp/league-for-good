import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import { initAuthState } from '../actions/index';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { css_loading } from '../components/style';

=======
import PropTypes from 'prop-types';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'white',
	zIndex: 2001,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2

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
<<<<<<< HEAD

	class loadState extends Component {
    
		renderSpinner() {
			return (
				<div style={css_loading.style}>
					<CircularProgress size={css_loading.size} />
=======

	class loadState extends Component {

		renderSpinner() {
			return (
				<div style={style}>
					<CircularProgress
						size={80}
						thickness={3.5}
					/>
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
				</div>
			);
		}

		componentWillMount() {
<<<<<<< HEAD
			//Get authentication status from the server
			//This switches off the loading state as long as a success response is received
      
=======
			// Get authentication status from the server
			// Switches off the loading state when a success response is received

>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
			this.props.initAuthState();
		}

		render() {
<<<<<<< HEAD
			const { initAuthState, loggedIn, ...props } = this.props;
     
			if (props.loading) {
				return this.renderSpinner();
			}
			//Redirect instantly if the user is not logged in 
			else if (!loggedIn) {
				return <Redirect to="/login" />;
			}
			//Render the desired content
			else {
=======
			const { loggedIn, ...props } = this.props;
			if (props.loading) {
				return this.renderSpinner();
			} else if (!loggedIn) {
				// Redirect instantly if the user is not logged in
				return <Redirect to='/login' />;
			} else {
				// Render the desired content
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
				return <ComposedComponent {...props} />;
			}
		}
	}
<<<<<<< HEAD
  
=======

	loadState.propTypes = {
		initAuthState: PropTypes.func,
		loggedIn: PropTypes.bool
	};

>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
	function mapStateToProps({ auth, menu }) {

		const { loggedIn, loading } = auth;
		return { loggedIn, loading, menuOpen: menu.open };
	}
<<<<<<< HEAD
  
=======

>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
	function mapDispatchToProps(dispatch) {
		return bindActionCreators({ initAuthState }, dispatch);
	}

	return connect(mapStateToProps, mapDispatchToProps)(loadState);
}


