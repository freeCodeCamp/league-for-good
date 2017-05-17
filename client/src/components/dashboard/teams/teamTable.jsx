import React, { Component } from 'react';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import TableTemplate from '../helper/tableTemplate.jsx';
import { containerCSS, titleCSS } from '../dashboardCSS';

const style = {
	nameCol: {
		width: '30%',
		textAlign: 'left',
	},
	defaultCol: {
		width: '20%',
		textAlign: 'left',
	},
	iconCol: {
		width: '10%',
		textAlign: 'right',
	},
};

// Table that lists all the teams and the ability to edit or delete each team
class TeamTable extends Component {

	// Column headers and data
	colData = [
		{ label: 'Name', style: style.nameCol, cellProp: 'name' },
		{ label: 'Roster Size', style: style.defaultCol, cellProp: 'players.length' },
		{ label: 'Seasons Played', style: style.defaultCol, cellProp: 'seasons.length' },
		{ label: 'Status', style: style.defaultCol, cellProp: 'currently_active' },
		{ label: '', style: style.iconCol, cellProp: 'icon' },
	];

	// Get the value for the cell
	getCellValue(team, prop, action) {
		console.log(team[prop]);
		if (prop === 'currently_active') {
			return team[prop] ? "Active" : "Not Active";
		}
		if (prop === 'icon') {
			return this.getIcon(action);
		}
		// Parse for extra properties
		if (prop.split('.').length > 1) {
			return prop.split('.').reduce((o, i) => o[i], team);
		}
		return team[prop];
	}

	// Get proper icon
	getIcon(action) {
		if (action === 'edit') {
			return <EditIcon />;
		}
		return <DeleteIcon />;
	}
	
	tableTitle = this.props.action === "edit" ? "Manage Teams" : "Delete Teams"
	
	// Massage the data for the table body
	tableData = this.props.teams.map(function(team) {
		return (
			this.colData.map(function(col) {
				return (
					{
						value: this.getCellValue(team, col.cellProp, this.props.action),
						style: col.style
					}
				);
			}, this)
		);
	}, this)

	render() {
		return (
			<TableTemplate 
				title={this.tableTitle}
				headers={this.colData}
				rows={this.tableData}
			/>
		);
	}
}

export default TeamTable;
