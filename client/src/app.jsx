import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication.jsx';
//higher order components used to bootstrap authentications and loading state


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { connect } from 'react-redux';

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';
import themes from './components/themes';

//Main app component using 'connect' wrapper to dynamically set muiTheme

const RegForm = () => <h2>Hello</h2>

const App = props => {
	const { palette } = props;
		
	return (
		<MuiThemeProvider muiTheme={getMuiTheme({ palette })}>
			<Router>
				<div>
					<Route path="/" component={requireAuth(Content)}/>
					<Route path="/registration" component={RegForm}/>
					<Route path="/login" component={Login} />
				</div>
			</Router>
		</MuiThemeProvider>
	);
};


function mapStateToProps(state){
	const palette = themes.getThemeList()[state.theme];
	return { palette };
}

export default connect(mapStateToProps)(App);
