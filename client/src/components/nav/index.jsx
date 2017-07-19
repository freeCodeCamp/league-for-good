import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from './Menu.jsx';
import Bar from './Bar.jsx';
import {
	toggleMenu,
	selectLeague,
	openModal,
	changeTheme
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
	leagues: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
	openModal: PropTypes.func,
	selectLeague: PropTypes.func,
	toggleMenu: PropTypes.func
};

function mapStateToProps({menu, league}) {
	const { open } = menu;
	let { selected, ...leagues } = league;
	const keys = Object.keys(leagues);
	leagues = keys.map(key => {
		const isSelected = selected === key;
		return { ...leagues[key], isSelected };
	})
	return { open, leagues };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		toggleMenu,
		selectLeague,
		openModal,
		changeTheme
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

