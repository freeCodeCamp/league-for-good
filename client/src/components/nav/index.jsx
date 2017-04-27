import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleMenu} from '../../actions/index';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LogInButton from './LogInButton.jsx';
import LeftMenu from './Menu.jsx';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {menuOpen: false};
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu() {
		if (!this.props.loggedIn) return;
		this.setState({menuOpen: !this.state.menuOpen});
	}
	render() {
		return (
			<div>
				<AppBar title="League For Good"
						style={{zIndex:2000}}
						iconElementRight={<LogInButton {...this.props}/>}
						onLeftIconButtonTouchTap={()=>this.props.toggleMenu()}/>
				<LeftMenu open = {this.props.open}
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
		open: menu.open
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

