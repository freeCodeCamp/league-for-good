import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import { initAuthState } from '../actions/index';
import { Redirect } from 'react-router-dom';
import { css_loading } from '../components/style';


/*
  Higher order component that ensures no part of the app is in a 'load state'
  If the application is loading it will render a loading view 

  
  Currently this function is only used when the application is initially started to 
  to hide any state changes while an authentication call to the server is being resolved 

  Can be applied during other Async calls  
  
  @composedComponent - 
  @userProps([Functions]) - extra user defined props to pass to composed component
*/

export default function(ComposedComponent) {

	class loadState extends Component {
    
		renderSpinner() {
			return (
				<div style={css_loading.style}>
					<CircularProgress size={css_loading.size} />
				</div>
			);
		}

		componentWillMount() {
			//Get authentication status from the server
			//This switches off the loading state as long as a success response is received
      
			this.props.initAuthState();
		}

		render() {
			const { initAuthState, loggedIn, ...props } = this.props;
     
			if(props.loading) {
				return this.renderSpinner();
			}
			//Redirect instantly if the user is not logged in 
			else if(!loggedIn) {
				return <Redirect to="/login"/>;
			}
			//Render the desired content
			else {
				return <ComposedComponent {...props} />;
			}
		}
	}
  
	function mapStateToProps({ auth, menu }) {

		const { loggedIn, loading } = auth;
		return { loggedIn, loading, menuOpen: menu.open };
	}
  
	function mapDispatchToProps(dispatch) {
		return bindActionCreators({ initAuthState }, dispatch);
	}
  
	return connect(mapStateToProps, mapDispatchToProps)(loadState);
}


