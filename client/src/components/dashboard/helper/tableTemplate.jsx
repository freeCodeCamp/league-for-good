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

import { orderBy } from 'lodash';

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
	colHeaderButtonLabel: {
		color: '#000',
		textTransform: 'none',
		padding: '0px',
		margin: '0px'
	},
	colHeaderStyle: {
		padding: '0px',
		margin: '0px',
		textAlign: 'left',
	},
	sortArrowActiveColor: 'black',
	sortArrowInactiveColor: 'lightgrey',
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
							key={i}
							style={header.style || style.defaultCol}>
							<ColumnHeaderChild
								label={header.label}
								onClick={props.onSort}
								sortable={header.sortable}
								colIndex={i}
								sortDirection={props.sortDirection}
								sortColumnIndex={props.sortColumnIndex}
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
	let arrowIcon = <noScript />;

	// If the column is sortable, determine appropriate icon
	if (!!props.sortable) {
		let columnSorted = props.colIndex === props.sortColumnIndex;
		let iconColor = columnSorted ?
			style.sortArrowActiveColor :
			style.sortArrowInactiveColor;
			
		if (props.sortDirection === 'asc') {
			if (columnSorted) {
				arrowIcon = <ArrowDown color={iconColor} />;
			}
			else {
				arrowIcon = <ArrowUp color={iconColor} />;
			}
		}
		else if (props.sortDirection === 'desc') {
			arrowIcon = <ArrowUp color={iconColor} />;
		}
		else {
			arrowIcon = <ArrowUp color={iconColor} />;
		}
	}

	return (
		<FlatButton 
			label={props.label}
			icon={arrowIcon}
			hoverColor="#fff"
			labelStyle={style.colHeaderButtonLabel}
			style={style.colHeaderStyle}
			labelPosition="before"
			disabled={!props.sortable}
			disableTouchRipple={true}
			onTouchTap={() => { props.onClick(props.colIndex) }}
		/>
	);
};

// Table that lists all the teams and the ability to edit or delete each team
class TableTemplate extends Component {
	constructor(props) {
		super(props);
		let searchableIndex = 0;
		
		this.props.headers.forEach((header, i) => {
			if (!!header.searchable) {
				searchableColumnIndex = i;
			}
		});
		
		this.state = {
			rows: Array.from(this.props.rows),
			sortDirection: 'none',
			searchableColumnIndex: searchableIndex,
			sortColumnIndex: null,
			searchTerm: '',
			searchRows: [],
		};
	}

	
	// Change state of teams based on panel rendered
	componentWillReceiveProps(nextProps) {
		if (this.props.rows !== nextProps.rows) {
			let searchableIndex = 0;
			
			this.props.headers.forEach((header, i) => {
				if (!!header.searchable) {
					searchableColumnIndex = i;
				}
			});
			
			this.setState({
				rows: Array.from(nextProps.rows),
				sortDirection: 'none',
				searchableColumnIndex: searchableIndex,
				sortColumnIndex: null,
			});
		}
	}
	
	// Search for rows passed in to the table as a searchable column
	// Only one column is currently allowed to be searchable
	onSearch(event, newValue) {
		newValue = newValue.trim();
		let rowValue = '';
		let searchRows = this.props.rows.filter((row) => {
				rowValue = row[this.state.searchableColumnIndex].value.toLowerCase();
				return rowValue.indexOf(newValue.toLowerCase()) === 0;
			}, this);
		
		this.setState({
			searchTerm: newValue,
			searchRows: Array.from(searchRows),
			rows: searchRows,
		});
	}
	
	// Sort when clicked
	// @colProp: which column to sort by
	onSort(colIndex) {
		// Add sort state for each column
		// Sort state should only update if the column selected is the same
		let sortDirection = colIndex === this.state.sortColumnIndex ?
			this.sortMap[this.state.sortDirection] :
			'asc';
		let sortedRows;
		
		// Changing sort from asc to desc or desc to none
		// or the user is sorting a different column
		if (sortDirection !== 'none' || colIndex !== this.state.sortColumnIndex) {
			// If the same column is being sorted (i.e. asc -> desc)
			if (colIndex === this.state.sortColumnIndex) {
				sortedRows = this.state.rows.sort(
					this.sortColumn(sortDirection, colIndex)
				);
			}
			// else, a different column has been sorted, so sort to default(asc)
			else {
				sortedRows = this.state.rows.sort(
					this.sortColumn('asc', colIndex)
				);
			}
		}
		// else, the sorting has been reset to the original state
		else {
			if (!!this.state.searchTerm) {
				sortedRows = Array.from(this.state.searchRows);
			}
			else {
				sortedRows = Array.from(this.props.rows);
			}
			colIndex = null;
		}
	
		this.setState({
			rows: sortedRows,
			sortDirection: sortDirection,
			sortColumnIndex: colIndex,
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
	sortColumn(direction, colIndex) {
		if (direction === 'asc') {
			return function(a, b) {
				if (a[colIndex].value < b[colIndex].value) {
					return -1;
				}
				if (a[colIndex].value > b[colIndex].value) {
					return 1;
				}
				return 0;
			}
		}
		if (direction === 'desc') {
			return function(a, b) {
				if (b[colIndex].value < a[colIndex].value) {
					return -1;
				}
				if (b[colIndex].value > a[colIndex].value) {
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
							sortDirection={this.state.sortDirection}
							sortColumnIndex={this.state.sortColumnIndex}
						/>
					</TableHeader>
					<TableBody
						preScanRows={false}
						displayRowCheckbox={false}
						showRowHover={true}
					>
						{renderBody(this.state.rows)}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default TableTemplate;
