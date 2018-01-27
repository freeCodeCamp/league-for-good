import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'material-ui/Table';

import TableBody from './tableBody.jsx';
import TableHeader from './tableHeader.jsx';
import TableFooter from './tableFooter.jsx';
import SearchTable from './tableSearchInput.jsx';
import { cssDashboard } from '../../../styles';
import sortRows from './utils/sorting';

// A table template to easily render a table in the management panel
// Also allows the styling of each column to be specified or uses a default
// styling component, where each column is an equal width
//
// Table template component takes in three props
//
// @title(optional) - String: The title of the table at the top of the panel
//
// @headers - [Object]: An array of objects
//		Each object requires the following fields:
//			label(String) - Column name
//			style(Object) - a css object to style the column(optional)
//			sortable(Boolean) - true if column is sortable; false otherwise
//			searchable(Boolean) - true if column is searchable
//								  currently only allowed on one column
//								  if no searchable column is found, search will not render
//
// @rows - [[Object]]: An array of an array of objects
//		The rows array is an array containing each row in the table
//		Each row maps to the headers prop, so arrays must be the same length
//		Each row is an array of objects with each object being a cell value
//		Each row is passed in with the following values in the objects:
//			value - Value that will be displayed in the cell
//			style(Object) - a css object to style the cell(optional)

class TableTemplate extends Component {
	constructor(props) {
		super(props);
		let searchableColumnIndex = -1;
		let searchableColumnLabel = '';

		this.props.headers.forEach((header, i) => {
			if (header.searchable) {
				searchableColumnIndex = i;
				searchableColumnLabel = header.label;
			}
		});

		this.state = {
			page: 0,
			rows: Array.from(this.props.rows),
			rowsPerPage: 20,
			sortDirection: 'none',
			searchableColumnIndex: searchableColumnIndex,
			searchableColumnLabel: searchableColumnLabel,
			sortColumnIndex: null,
			searchTerm: '',
			searchRows: []
		};
	}

	sortMap = {
		none: 'asc',
		asc: 'desc',
		desc: 'none'
	}
	// Change state of teams based on panel rendered
	componentWillReceiveProps(nextProps) {
		if (this.props.rows !== nextProps.rows) {
			let searchableColumnIndex = -1;
			let searchableColumnLabel = '';

			this.props.headers.forEach((header, i) => {
				if (header.searchable) {
					searchableColumnIndex = i;
					searchableColumnLabel = header.label;
				}
			});

			this.setState({
				page: 0,
				rows: Array.from(nextProps.rows),
				sortDirection: 'none',
				searchableColumnIndex: searchableColumnIndex,
				searchableColumnLabel: searchableColumnLabel,
				sortColumnIndex: null
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
			page: 0,
			searchTerm: newValue,
			searchRows: Array.from(searchRows),
			rows: searchRows
		});
	}

	paginate = rows => {
		const { rowsPerPage, page } = this.state;
		const start = page * rowsPerPage;
		const end = (page + 1) * rowsPerPage;
		return rows.slice(start, end);
	}

	onPaginate = step => {
		const newPage = this.state.page + step;
		this.setState({ page: newPage });
	}
	// Sort when clicked
	// @colProp: which column to sort by
	onSort(colIndex) {
		let sortedRows;
		let { sortDirection, sortColumnIndex } = this.state;
		const [...initialRows] = this.props.rows;
		const handleSort = sortRows.bind(
			{...this.state, initialRows});

		// Sort state should only update if the column selected is the same
		sortDirection = colIndex === sortColumnIndex ?
			this.sortMap[sortDirection] : 'asc';
		// if the user is searching, return to the original state of searched rows
		if (this.state.searchTerm) {
			sortedRows = initialRows;
		}	else {
			sortedRows = handleSort(colIndex, sortDirection);
		}

		this.setState({
			rows: sortedRows,
			sortDirection,
			sortColumnIndex: colIndex
		});
	}

	render() {
		const { rows } = this.state;
		return (
			<div>
				{
					this.props.title &&
						<h1 style={cssDashboard.title}>
							{this.props.title}
						</h1>
				}
				{
					this.props.subtitle && 
						<p style={cssDashboard.title}>
							<b>{this.props.subtitle}</b>
						</p>
				}
				{
					this.state.searchableColumnIndex !== -1 &&
					<SearchTable
						onSearch={this.onSearch.bind(this)}
						searchLabel={this.state.searchableColumnLabel}
					/>
				}
				<Table style={cssDashboard.table.style}>
					<TableHeader
						headers={this.props.headers}
						onSort={this.onSort.bind(this)}
						sortColumnIndex={this.state.sortColumnIndex}
						sortDirection={this.state.sortDirection}
					/>
					<TableBody rows={this.paginate(rows)}/>
					<TableFooter
						onClick={this.onPaginate}
						page={this.state.page}
						rowsPerPage={this.state.rowsPerPage}
						total={rows.length}
					/>
				</Table>
			</div>
		);
	}
}

TableTemplate.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
	subtitle: PropTypes.string,
	title: PropTypes.string
};

export default TableTemplate;
