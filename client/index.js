import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers/index';

import App from './src/app.jsx';

injectTapEventPlugin();

const Root = () => {
	return(
		<MuiThemeProvider>
		  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
		    <App />
		  </Provider>
		</MuiThemeProvider>
	);
}

ReactDOM.render(<Root/>, document.getElementById('root'));