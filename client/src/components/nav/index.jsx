import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu, resetDashboard, selectLeague, openModal, selectTeams } from '../../actions/index';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';
import { css_appBar } from '../style';


class NavBar extends Component {

	selectLeague = league => {
		const { teams, ...rest } = league;

		this.props.resetDashboard();
		this.props.selectLeague(rest);
		this.props.selectTeams(teams);

	};

	render() {
		const {dispatch} = this.props;
		return (
			<div>
				<AppBar 
					title="League For Good"
					style={css_appBar}
					onLeftIconButtonTouchTap={()=> this.props.toggleMenu()}
				/>
				<Menu 
					leagues={this.props.leagues}
					open={this.props.open} 
					openModal={this.props.openModal}
					selectLeague={this.selectLeague}
				/>        
			</div>
		);
	}
}

function mapStateToProps({menu, league}) {
	const { open } = menu;
	return { open, leagues:league.list };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		toggleMenu,  
		selectLeague,
		selectTeams,
		resetDashboard, 
		openModal
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

