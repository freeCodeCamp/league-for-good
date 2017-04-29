import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initAuthState ,logOut} from '../../actions/index';

class LogInButton extends Component {
	renderDefault() {
		return (
			<a href='/auth/google'>
				<RaisedButton label="Log In" backgroundColor='#F5F5F5' />
			</a>
		);
	}
	renderAvatar() {
		return (
			<div style={{cursor:'pointer'}} 
				onClick = {()=> this.props.logOut()}>
				<Avatar src={this.props.user.avatar}/>
			</div>
		);
	}


	render() {
		if(!this.props.user) {
			return this.renderDefault();
		}
		else {
			return this.renderAvatar();
		}
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({logOut}, dispatch);
}

export default connect(null, mapDispatchToProps)(LogInButton);
