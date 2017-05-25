import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { css_login } from './style';

const Button = () => (   
	<RaisedButton 
		label="Login"
		href="/auth/google"
		labelStyle={css_login.raisedButton.label} 
		backgroundColor={css_login.raisedButton.backgroundColor}
	/>
);

const LoginModal = props => {
	return (
		<div>
			<Dialog
				title="Log in with your Google+ account"
				titleStyle={css_login.dialog.title}
				actions={<Button />}
				modal={true}
				open={true}
			>
			</Dialog>
		</div>
	);
};

export default LoginModal;
