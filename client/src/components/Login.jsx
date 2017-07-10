import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { cssLogin } from './style';

const Button = () => (
	<RaisedButton
		backgroundColor={cssLogin.raisedButton.backgroundColor}
		href="/auth/google"
		label="Login"
		labelStyle={cssLogin.raisedButton.label}
		style={cssLogin.raisedButton.style}
	/>
);

const LoginModal = () => {
	return (
		<div>
			<Dialog
				actions={<Button />}
				modal={true}
				open={true}
				title="Log in with your Google+ account"
				titleStyle={cssLogin.dialog.title}
			/>

		</div>
	);
};

export default LoginModal;
