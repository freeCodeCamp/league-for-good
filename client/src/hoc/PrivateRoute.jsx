import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

/*
	A higher order component that extends the 'handleLoading' one.
	It kicks the user out of their current view if no longer authenticated.
*/

export default function(ComposedComponent) {

	return class extends Component {
		render() {
			const { loggedIn, history, location, match } = this.props;
			const routerProps = {location, history, match};

			if (loggedIn) {
				return <ComposedComponent {...routerProps} />
			}
			else {
				return <Redirect to="/login"/>
			}
		}
	}
}


