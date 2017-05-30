import React, { Component } from 'react';
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
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// This must be invoked in order for the Material-UI theme provider to work
injectTapEventPlugin();

const store = createStore(reducers, applyMiddleware(thunk));

function select(state) {
	return state.theme;
}


class Root extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			currentTheme: themes.getCurrentThemeName(),
			muiTheme: getMuiTheme({
						palette: themes.getThemeList()[themes.getCurrentThemeName()],
					  }),
		};
	}
	
	componentDidMount() {
		const select = state => {
			return state.theme;
		}
	
		const handleThemeChange = () => {
			let previousTheme = this.state.currentTheme;
			this.setState({
				currentTheme: select(store.getState())
			});

			if (previousTheme !== this.state.currentTheme) {
				this.setState({
					muiTheme: getMuiTheme({
								palette: themes.getThemeList()[currentTheme],
							  })
				});
			}
		}

		store.subscribe(handleThemeChange);
	}
	

	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={this.state.muiTheme}>
					<App />
				</MuiThemeProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
