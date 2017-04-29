import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleMenu} from '../../actions/index';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LogInButton from './LogInButton.jsx';
import Spinner from '../LoadingPage.jsx';
import Menu from './Menu.jsx';

class NavBar extends Component {

	render() {
		return (
			<div>
				<AppBar title="League For Good"
						style={{zIndex:2000}}
						iconElementRight={<LogInButton {...this.props}/>}
						onLeftIconButtonTouchTap={()=>this.props.toggleMenu()}/>
				<Menu open = {this.props.open}
						  loggedIn = {this.props.loggedIn}/>        
			</div>			
		);
	}
}

function mapStateToProps(state) {
	const {auth, menu} = state;
	return {
		loggedIn: auth.loggedIn,
		user: auth.user,
		open: menu.open,
		loading: auth.loading
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

