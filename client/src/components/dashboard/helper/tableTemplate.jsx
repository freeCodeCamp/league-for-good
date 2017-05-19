import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { containerCSS, titleCSS } from '../dashboardCSS';

const style = {
	defaultCol: {
		width: '20%',
		textAlign: 'left',
	},
	search: {
		marginLeft: '20px',
	},
	searchUnderline: {
		borderColor: '#2196F3',
	},
	sortIcon: {
		display: 'inline',
		cursor: 'pointer',
	},
};

// Title for the table
const TableTitle = (props) => {
	return <h1 style={titleCSS}>{props.title}</h1>;
};

// Search the table
const SearchTable = (props) => {
	return (
		<TextField 
			hintText={<SearchIcon />}
    		underlineFocusStyle={style.searchUnderline}
    		style={style.search}
    		floatingLabelText="Search"
    		floatingLabelFixed={true}
    		onChange={props.onSearch}
		/>
	);
};

// Header row for the table
const Headers = (props) => {
	return (
		<TableRow>
			{
				props.headers.map(function(header,i) {
					return (
						<TableHeaderColumn 
							key = {i}
							style={header.style || style.defaultCol}>
							<ColumnHeaderChild
								colTitle={header.label}
								onClick={props.onSort}
								sortable={header.sortable}
							/>
						</TableHeaderColumn>
					);
				})
			}
		</TableRow>
	);
};

// renders the TableRow components that will appear inside the TableBody 
//Not a functional component.. This returns an array rather than a single JSX component
const renderBody = (rows) => {
	return (
			rows.map(function(row, i) {
				return (
					<TableRow 
						key={i} 
						selectable={false}
					>
						{
							row.map(function(rowData, i) {
								return (
									<TableRowColumn 
										style={rowData.style || style.defaultCol}
										key={i}
									>
										{ i === 0 ?  <strong>{rowData.value}</strong> 
												: <span>{rowData.value}</span> 
										}
									</TableRowColumn>
								);
							})
						}
					</TableRow>
				);
			})
	);
}

// column header with sorting icons
const ColumnHeaderChild = (props) => {
	return (
		<FlatButton 
			label={props.colTitle}
			icon={!!props.sortable ? <ArrowDown /> : <noScript/>}
			hoverColor="#fff"
			labelStyle={{color: '#000', textTransform: 'none', padding: '0px', margin: '0px'}}
			style={{padding: '0px', margin: '0px', textAlign: 'left'}}
			labelPosition="before"
			disabled={!props.sortable}
		/>
	);
};

// Table that lists all the teams and the ability to edit or delete each team
class TableTemplate extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			teams: Array.from(this.props.rows),
			sortDirection: 'none',
		};
	}

	
	// Change state of teams based on panel rendered
	componentWillReceiveProps(nextProps) {
		if (this.props.rows !== nextProps.rows) {
			this.setState({
				teams: Array.from(nextProps.rows),
				sortDirection: 'none',
			});
		}
	}
	
	// Search for teams
	onSearch(event, newValue) {
		let teamName = '';
		this.setState({
			teams: this.props.teams.filter((team) => {
				teamName = team.name.toLowerCase();
				return teamName.indexOf(newValue.toLowerCase()) === 0;
			})
		});
	}
	
	// Sort when clicked
	// @colProp: which column to sort by
	onSort(colProp) {
		// Add sort state for each column
		let sortDirection = this.sortMap[this.state.sortDirection];
		let sortedRows;
		
		if (sortDirection !== 'none') {
			sortedRows = this.state.rows.sort(
				this.sortColumn(sortDirection, colProp)
			);
		}
		else {
			sortedRows = Array.from(this.props.rows);
		}
	
		this.setState({
			teams: sortedTeams,
			sortDirection: sortDirection,
		});
	}
	
	sortMap = {
		'none': 'asc',
		'asc': 'desc',
		'desc': 'none',
	}
	
	// sort column based on a direction
	// @direction: direction in which to sort the column
	// @colProp: which column to sort
	sortColumn(direction, colProp) {
		if (direction === 'asc') {
			return function(a, b) {
				if (a[colProp] < b[colProp]) {
					return -1;
				}
				if (a[colProp] > b[colProp]) {
					return 1;
				}
				return 0;
			}
		}
		if (direction === 'desc') {
			return function(a, b) {
				if (b[colProp] < a[colProp]) {
					return -1;
				}
				if (b[colProp] > a[colProp]) {
					return 1;
				}
				return 0;
			}
		}
		return 'none';
	}
	
	render() {
		return (
			<div style={containerCSS}>
				<TableTitle title={this.props.title} />
				<SearchTable onSearch={this.onSearch.bind(this)} />
				<Table>
					<TableHeader 
						adjustForCheckbox={false}
						displaySelectAll={false} 
						selectable={false}
					>
						<Headers 
							headers={this.props.headers}
							onSort={this.onSort.bind(this)}
						/>
					</TableHeader>
					<TableBody
						preScanRows={false}
						displayRowCheckbox={false}
						showRowHover={true}
					>
						{renderBody(this.props.rows)}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default TableTemplate;
