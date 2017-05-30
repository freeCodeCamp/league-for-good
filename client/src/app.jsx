import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication.jsx';
//higher order components used to bootstrap authentications and loading state

import Content from './components/Content.jsx';
import Login from './components/Login.jsx';
import themes from './components/themes';

// App is the entry point to the application
// Also is where the theme is set
class App extends Component {
	constructor(props) {
		super(props);
		let userTheme = localStorage.getItem('userTheme');
		let currentTheme;
		if (userTheme !== 'undefined') {
			console.log('user theme detected', userTheme);
			themes.setCurrentTheme(userTheme);
		}
		else {
		console.log('user theme not detected');
			localStorage.setItem('userTheme', themes.getCurrentThemeName());
		}
		
		currentTheme = themes.getCurrentThemeProps();
		
		this.state = {
			theme: currentTheme,
		};
	}
	
	changeTheme(theme) {
		themes.setCurrentTheme(theme);
		localStorage.setItem('userTheme', themes.setCurrentTheme(theme));
		
		let currentTheme = themes.getCurrentThemeProps();
		
		this.setState({
			theme: currentTheme,
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Route path="/" component={requireAuth(Content)}
					/>
					<Route path="/login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;
