import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Route } from 'react-router-dom';

import SnackBar from './snackbar.jsx';
import CreateLeagueForm from './create-league/CreateLeagueForm.jsx';
import NavBar from './nav/index.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Help from './help/help.jsx';
import Modal from './modal/modal.jsx';
import { cssContent } from './style';

const Content = props => {
	const contentWrapperClass = props.menuOpen ?
		'content-wrapper' :
		'content-wrapper-expanded';
	return (
		<div>
			<NavBar changeTheme={props.changeTheme} />
			<div className={contentWrapperClass}>
				<Paper style={cssContent.paper} zDepth={3}>
					<Route component={Dashboard} path='/dashboard' />
					<Route component={CreateLeagueForm} path='/create' />
					<Route component={Help} path='/help' />
				</Paper>
			</div>
			<Modal />
			<SnackBar />
		</div>
	);
};

Content.propTypes = {
	changeTheme: PropTypes.func,
	menuOpen: PropTypes.bool
};

export default Content;
