import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication.jsx';
// higher order components used to bootstrap authentications and loading state


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';
import themes from './components/themes';

// Main app component using 'connect' wrapper to dynamically set muiTheme

const RegForm = () => <h2>Hello</h2>;

const App = props => {
	const { palette } = props;

	return (
		<MuiThemeProvider muiTheme={getMuiTheme({ palette })}>
			<Router>
				<div>
					<Route component={requireAuth(Content)} path="/" />
					<Route component={RegForm} path="/registration" />
					<Route component={Login} path="/login" />
				</div>
			</Router>
		</MuiThemeProvider>
	);
};

App.propTypes = {
	palette: PropTypes.object
};

function mapStateToProps(state) {
	const palette = themes.getThemeList()[state.theme];
	return { palette };
}

export default connect(mapStateToProps)(App);
