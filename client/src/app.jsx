import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/PrivateRoute.jsx';
import handleLoading from './hoc/handleLoading.jsx';
//higher order components used to bootstrap authentications and loading state

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';


const App = props => (
	<Router>
		<div>
			<Route path="/" component={handleLoading(requireAuth(Content))}/>
			<Route path="/login" component={handleLoading(Login)}/>
		</div>
	</Router>
);

export default App;
