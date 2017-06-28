import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { cssLogin } from './style';

import { Link } from 'react-router-dom';

const Button = () => (
	<RaisedButton
		label='Login'
		href='/auth/google'
		labelStyle={cssLogin.raisedButton.label}
		backgroundColor={cssLogin.raisedButton.backgroundColor}
		style={cssLogin.raisedButton.style}
	/>
);

const LoginModal = props => {
	return (
		<div>
			<Dialog
				title='Log in with your Google+ account'
				titleStyle={cssLogin.dialog.title}
				actions={<Button />}
				modal={true}
				open={true}
			/>

		</div>
	);
};

export default LoginModal;
