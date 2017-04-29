import React from 'react';
import {
  BrowserRouter as Router,
  Route,  
  Redirect,
  withRouter
} from 'react-router-dom';

import Content from './components/Content.jsx';



const App = props => (
	<Router>
		<div>
			<Route path='/' component={Content}/>		
		</div>
	</Router>
);

export default App;
