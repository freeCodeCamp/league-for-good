import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleMenu, logOut} from '../../actions/index';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';

class NavBar extends Component {
	render() {
		return (
			<div>
				<AppBar 
					title="League For Good"
					style={{zIndex:2000}}
					onLeftIconButtonTouchTap={()=>this.props.toggleMenu()}
				/>
				<Menu 
					open={this.props.open}
					logOut={this.props.logOut}
				/>
			</div>
		);
	}
}

function mapStateToProps({menu}) {
	const {open} = menu;
	return {open};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleMenu, logOut }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

