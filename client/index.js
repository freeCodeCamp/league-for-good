import React from 'react';
import ReactDOM from 'react-dom';



import { Provider } from 'react-redux';
import { createStore, applyMiddleware, getState, subscribe } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

import App from './src/app.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import themes from './src/components/themes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// This must be invoked in order for the Material-UI theme provider to work
injectTapEventPlugin();


const store = createStore(reducers, applyMiddleware(thunk));

function select(state) {
	return state.theme;
}

let currentTheme = themes.getCurrentThemeName();
let muiTheme = getMuiTheme({
	palette: themes.getThemeList()[themes.getCurrentThemeName()],
});

function handleThemeChange() {
	let previousTheme = currentTheme;
	currentTheme = select(store.getState());

	if (previousTheme !== currentTheme) {
		muiTheme = getMuiTheme({
			palette: themes.getThemeList()[currentTheme],
		});
	}
}
console.log('muitheme', muiTheme);

store.subscribe(handleThemeChange);


const Root = () => {
	return(
		<Provider store={store}>
			<MuiThemeProvider muiTheme={muiTheme}>
				<App />
			</MuiThemeProvider>
		</Provider>
	);
};

ReactDOM.render(<Root/>, document.getElementById('root'));
