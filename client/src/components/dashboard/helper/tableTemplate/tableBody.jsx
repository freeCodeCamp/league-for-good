import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	TableBody as MuiTableBody,
	TableRow,
	TableRowColumn
} from 'material-ui/Table';


export default class TableBody extends Component {
	static muiName = 'TableBody';

	renderBody = rows =>
		rows.map((row, i) =>
			(<TableRow
				key={i}
				selectable={false}
				>
			{
				row.map(({colSpan, value}, i) =>
					(<TableRowColumn
						colSpan={colSpan}
						key={i}
						>
						{ i === 0 ? <b>{value}</b> : <span>{value}</span> }
					</TableRowColumn>)
				)
			}
		</TableRow>)
	)


	render() {
		return (
			<MuiTableBody
				displayRowCheckbox={false}
				preScanRows={false}
				>
				{this.renderBody(this.props.rows)}
			</MuiTableBody>
		);
	}
}

TableBody.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
};
