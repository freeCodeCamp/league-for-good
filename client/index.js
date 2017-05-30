import React from 'react';
import ReactDOM from 'react-dom';
import { getState, subscribe } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers/index';

import App from './src/app.jsx';

import themes from './src/components/themes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// This must be invoked in order for the Material-UI theme provider to work
injectTapEventPlugin();

const store = createStore(reducers, applyMiddleware(thunk));

function select(state) {
	return state.theme;
}

let muiTheme;
let currentTheme;
function handleThemeChange() {
	
	let previousTheme = currentTheme;
	currentTheme = select(store.getState());

	if (previousTheme !== currentTheme) {
		muiTheme = { palette: themes[currentTheme]}
	}
}

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
