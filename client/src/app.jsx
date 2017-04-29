import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './components/PrivateRoute.jsx';
import getAuthState from './components/getAuthState.jsx';
//higher order components used to bootstrap authentications and loading state

import Nav from './components/nav/index.jsx';
import Content from './components/Content.jsx';
import Login from './components/Login.jsx';


const App = props => (
	<Router>
		<div>
			<Route to="/" component={getAuthState(requireAuth(Content))}/>
			<Route to="/login" component={getAuthState(Login)}/>
		</div>
	</Router>
);

export default App;
