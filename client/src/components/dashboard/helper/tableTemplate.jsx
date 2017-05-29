import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';


import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { css_dashboard } from '../../style';

// A table template to easily render a table in the management panel
// Also allows the styling of each column to be specified or uses a default
// styling component, where each column is an equal width
//
// Table template component takes in three props
//
// @title - String: The title of the table at the top of the panel
//
// @headers - [Object]: An array of objects
//		Each object requires the following fields:
//			label(String) - Column name
//			style(Object) - a css object to style the column(optional)
//			sortable(Boolean) - true if column is sortable; false otherwise
//			searchable(Boolean) - true if column is searchable
//								  currently only allowed on one column
//			hideSearchInput(Boolean) - whether or not to render the search input, defaults to false	
//
// @rows - [[Object]]: An array of an array of objects
//		The rows array is an array containing each row in the table
//		Each row will map to the headers prop, so the arrays must be the same length
//		Each row is an array of objects with each object being a cell value
//		Each row is passed in with the following values in the objects in the row array
//			value - Value that will be displayed in the cell
//			style(Object) - a css object to style the cell(optional)


// Title for the table
const TableTitle = (props) => {
	return <h1 style={css_dashboard.title}>{props.title}</h1>;
};

// Search the table
const SearchTable = (props) => {
	return (
		<TextField 
			hintText={<SearchIcon />}
			underlineFocusStyle={css_dashboard.table.searchUnderline}
			style={css_dashboard.table.search}
			floatingLabelText="Search"
			floatingLabelFixed={true}
			onChange={props.onSearch}
		/>
	);
};



// Header row for the table containing column names
const Headers = (props) => {
	return (
		<TableRow>
			{
				props.headers.map(function(header,i) {
					return (
						<TableHeaderColumn 
							key={i}
							style={header.style ||
								css_dashboard.table.defaultCol}>
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
// Not a functional component.. This returns an array rather than a single JSX component
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
										style={rowData.style || 
											css_dashboard.table.defaultCol}
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
// when clicked will sort columns with asc, desc, or no order
const ColumnHeaderChild = (props) => {
	let arrowIcon = <noScript />;

	// If the column is sortable, determine appropriate icon
	if (!!props.sortable) {
		let columnSorted = props.colIndex === props.sortColumnIndex;
		let iconColor = columnSorted ?
			css_dashboard.table.sortArrowActiveColor :
			css_dashboard.table.sortArrowInactiveColor;
			
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
		// else, no sorting
		else {
			arrowIcon = <ArrowUp color={iconColor} />;
		}
	}

	return (
		<FlatButton 
			label={props.label}
			icon={arrowIcon}
			hoverColor={css_dashboard.table.colHeaderHover}
			labelStyle={css_dashboard.table.colHeaderButtonLabel}
			style={css_dashboard.table.colHeaderStyle}
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
		// set width of default columns in table
		css_dashboard.table.defaultCol.width = 90;
		
		this.props.headers.forEach((header, i) => {
			if (!!header.searchable) {
				searchableIndex = i;
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
					searchableIndex = i;
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
	onSearch = (event, newValue) => {
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
		// if a different column has been sorted, sort to default(asc)
		if (colIndex !== this.state.sortColumnIndex) {
			sortedRows = this.state.rows.sort(
				this.sortColumn(colIndex)
			);
		}
		// If the same column is being sorted (i.e. asc -> desc)
		else if (sortDirection !== 'none') {
			// if sorting using asc
			if (sortDirection === 'asc') {
				sortedRows = this.state.rows.sort(
					this.sortColumn(colIndex)
				);
			}
			// else, it is switching to desc and can just reverse current state of rows
			else {
				sortedRows = this.state.rows.reverse();
			}
		}
		// else, the sorting has been reset to the original state
		else {
			// if the user is searching, return to the original state of searched rows
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
	// @colIndex: column index of the table
	sortColumn(colIndex) {
		// check if the sorting is using strings
		// and if true, we can normalize the string
		const comparingStrings = (a, b, colIndex) => {
			if (typeof a[colIndex].value === 'string' ||
				typeof b[colIndex].value === 'string') {
				return true;
			}
			return false;
		};

		return function(a, b) {
			if (comparingStrings(a, b, colIndex)) {
				if (String(a[colIndex].value).toLowerCase() <
					String(b[colIndex].value).toLowerCase()) {
					return -1;
				}
				if (String(a[colIndex].value).toLowerCase() > 
					String(b[colIndex].value).toLowerCase()) {
					return 1;
				}
				return 0;
			}
			else {
				if (a[colIndex].value < b[colIndex].value) {
					return -1;
				}
				if (a[colIndex].value > b[colIndex].value) {
					return 1;
				}
				return 0;
			}
		};
	}
	

	render() {
		return (
			
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
		);
	}
}

export default TableTemplate;

				// { 
				// 	!this.props.hideSearchInput && 
				// 		<SearchTable onSearch={this.onSearch} />	
				// }
