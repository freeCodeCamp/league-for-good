import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

import App from './src/app.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';


// This must be invoked in order for the Material-UI theme provider to work
injectTapEventPlugin();


const store = createStore(reducers, applyMiddleware(thunk));

// function select(state) {
// 	return state.theme;
// }

// let currentTheme = themes.getCurrentThemeName();
// let palette = themes.getThemeList()[themes.getCurrentThemeName()];

// function handleThemeChange() {
// 	let previousTheme = currentTheme;
// 	currentTheme = select(store.getState());

// 	if (previousTheme !== currentTheme) {

// 		palette = themes.getThemeList()[currentTheme]

// 	}
// }

// store.subscribe(handleThemeChange);

const Root = () => {
<<<<<<< HEAD
	return(
=======

	return (
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
