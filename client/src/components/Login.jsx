import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { css_login } from './style';

import { Link } from 'react-router-dom';

const Button = () => (   
	<RaisedButton 
		label="Login"
		href="/auth/google"
		labelStyle={css_login.raisedButton.label} 
		backgroundColor={css_login.raisedButton.backgroundColor}
		style={css_login.raisedButton.style}
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
