import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { initAuthState } from '../actions/index';

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


