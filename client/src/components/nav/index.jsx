import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';
import Bar from './Bar.jsx';
import { 
	toggleMenu, 
	resetDashboard, 
	selectLeague, 
	openModal, 
	selectTeams, 
	changeTheme, 
	fetchPlayerList 
} from '../../actions/index';


class NavBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			themeMenuOpen: false,
		};
	}

	selectLeague = league => {
		const { teams, ...leagueData } = league;

		this.props.resetDashboard();
		this.props.selectLeague(leagueData);
		this.props.fetchPlayerList(leagueData._id);
		this.props.selectTeams(teams);
	}
	
	themeMenuToggle = () => {
		this.setState({
			themeMenuOpen: !this.state.themeMenuOpen,
		});
	}

	render() {
		const {dispatch} = this.props;
		
		return (
			<div>
				<Bar 
					toggleMenu={this.props.toggleMenu}
					themeMenuToggle={this.themeMenuToggle}
					themeMenuOpen={this.state.themeMenuOpen}
					changeTheme={this.props.changeTheme}
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
	return { open, leagues: league.list };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		toggleMenu,
		selectLeague,
		selectTeams,
		resetDashboard, 
		openModal,
		changeTheme,
		fetchPlayerList,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

