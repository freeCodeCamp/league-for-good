import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from './Menu.jsx';
import Bar from './Bar.jsx';
import {
	toggleMenu,
	selectLeague,
	openModal,
	selectTeams,
	changeTheme,
	fetchPlayerList,
	selectStaff
} from '../../actions/index';
import PropTypes from 'prop-types';


class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			themeMenuOpen: false
		};
	}

	selectLeague = league => {
		// const { teams, staff, ...leagueData } = league;

		// // Mark new league as 'Selected'
		// this.props.selectLeague(leagueData);
		// // Fetch players from league from the server
		// this.props.fetchPlayerList(leagueData._id);
		// // Dispatch teams in the league to the teams reducer
		// this.props.selectTeams(teams);
		// // Dispatch staff in the league to the staff reducer
		// this.props.selectStaff(staff);
		this.props.selectLeague(league._id);
	}

	themeMenuToggle = () => {
		this.setState({
			themeMenuOpen: !this.state.themeMenuOpen
		});
	}

	render() {
		return (
			<div>
				<Bar
					changeTheme={this.props.changeTheme}
					themeMenuOpen={this.state.themeMenuOpen}
					themeMenuToggle={this.themeMenuToggle}
					toggleMenu={this.props.toggleMenu}
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

NavBar.propTypes = {
	changeTheme: PropTypes.func,
	fetchPlayerList: PropTypes.func,
	leagues: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
	openModal: PropTypes.func,
	selectLeague: PropTypes.func,
	selectStaff: PropTypes.func,
	selectTeams: PropTypes.func,
	toggleMenu: PropTypes.func
};

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
		selectStaff
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

