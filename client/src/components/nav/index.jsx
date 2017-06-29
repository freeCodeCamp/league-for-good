import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';
import Bar from './Bar.jsx';
import { 
	toggleMenu,  
	selectLeague, 
	openModal, 
	selectTeams, 
	changeTheme, 
	fetchPlayerList, 
	fetchSeasonList,
	selectStaff,
} from '../../actions/index';


class NavBar extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			themeMenuOpen: false,
		};
	}

	selectLeague = league => {
		const { teams, staff, ...leagueData } = league;

		console.log(this.props);
		// Mark new league as 'Selected'
		this.props.selectLeague(leagueData);
		// Fetch players from league from the server
		this.props.fetchPlayerList(leagueData._id);
		// Fetch seasons from league from the server
		this.props.fetchSeasonList(leagueData._id);
		// Dispatch teams in the league to the teams reducer
		this.props.selectTeams(teams);
		// Dispatch staff in the league to the staff reducer
		this.props.selectStaff(staff);
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
		openModal,
		changeTheme,
		fetchPlayerList,
	       	fetchSeasonList,
		selectStaff,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

