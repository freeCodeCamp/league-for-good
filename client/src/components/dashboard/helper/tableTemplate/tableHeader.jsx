import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	TableHeader as MuiTableHeader,
	TableHeaderColumn,
	TableRow
} from 'material-ui/Table';
import ColumnHeaderChild from './columnHeaderChild.jsx';
import { cssDashboard } from '../../../style';

// IMPORTED STYLES
const { table: {
	colHeaderLabelStyle,
	colHeaderStyle
}} = cssDashboard;

export default class TableHeader extends Component {
	static muiName = 'TableHeader';

	renderColumns = () => {
		const { onSort, sortColumnIndex, sortDirection } = this.props;
		return this.props.headers.map(function(header, i) {
			return (
				<TableHeaderColumn
					colSpan={header.colSpan || 1}
					key={i}
					style={colHeaderStyle}
					>
					<ColumnHeaderChild
						colIndex={i}
						label={header.label}
						onClick={onSort}
						sortable={header.sortable}
						sortColumnIndex={sortColumnIndex}
						sortDirection={sortDirection}
					/>
				</TableHeaderColumn>
			);
		})		
	}
	render(){
		return (
			<MuiTableHeader
				adjustForCheckbox={false}
				displaySelectAll={false}
				selectable={false}
				>
				<TableRow>
					{ this.renderColumns()}
				</TableRow>
			</MuiTableHeader>
		);
	};
}

TableHeader.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.object),
	sortDirection: PropTypes.string
};

