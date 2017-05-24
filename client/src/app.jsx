import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication.jsx';
//higher order components used to bootstrap authentications and loading state

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';


const App = props => (
	<Router>
		<div>
			<Route path="/" component={requireAuth(Content)}/>
			<Route path="/login" component={Login}/>
		</div>
	</Router>
);

export default App;
