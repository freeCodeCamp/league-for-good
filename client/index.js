import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

import App from './src/app.jsx';

const store = createStore(reducers, applyMiddleware(thunk));
// Connect app to the redux store

const Root = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
