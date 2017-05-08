import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleMenu, logOut, selectLeague, fetchLeagues} from '../../actions/index';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';

class NavBar extends Component {
	componentDidMount(){
		if(!this.props.leagues.length){
			this.props.fetchLeagues()
		}
	}
	render() {
		return (
			<div>
				<AppBar 
					title="League For Good"
					style={{zIndex:2000}}
					onLeftIconButtonTouchTap={()=>this.props.toggleMenu()}
				/>
				<Menu 
					leagues={this.props.leagues}
					open={this.props.open} 
					logOut={this.props.logOut}
					selectLeague={this.props.selectLeague}
				/>        
			</div>			
		);
	}
}

function mapStateToProps({menu, league}) {
	const {open} = menu;
	return {open, leagues:league.list};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleMenu, logOut, selectLeague, fetchLeagues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

