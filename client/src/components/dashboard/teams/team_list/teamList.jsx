import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssContent, cssDashboard } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

import getRowData, { colData } from './teamData';

import { connect } from 'react-redux';

// Table that lists all the teams and the ability to edit or delete each team
// Can also view the roster of each team
class TeamTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterValue: 'all'
		};
	}

	handleChange = (e, i, filterValue) => {
		this.setState({ filterValue });
	}

    // Filter the team list array with params in state
	formatTeams() {
		const { filterValue } = this.state;
		let { teams } = this.props;

		return teams.filter(team => {
			let filterFlag;

			if (filterValue === 'all') {
				filterFlag = true;
			} else if (filterValue === 'active') {
				filterFlag = team.currently_active;
			} else {
				filterFlag = !team.currently_active;
			}

			return filterFlag;
		});
	}

	render() {

		const teams = this.formatTeams();

		return (
			<div style={cssContent.body}>
				<DropDownMenu
					onChange={this.handleChange}
					style={cssDashboard.table.teams.dropdown}
					value={this.state.filterValue}
					>
					<MenuItem primaryText='All Teams' value='all' />
					<MenuItem primaryText='Active Teams' value='active' />
					<MenuItem primaryText='Archived Teams' value='archived' />
				</DropDownMenu>
				<TableTemplate
					headers={colData}
					rows={getRowData({teams})}
				/>
			</div>
		);
	}
}

TeamTable.propTypes = {
	teams: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
	return { teams: state.teams };
}

export default connect(mapStateToProps)(TeamTable);


