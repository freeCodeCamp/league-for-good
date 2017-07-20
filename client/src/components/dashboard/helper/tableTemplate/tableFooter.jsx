import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	TableFooter as MuiTableFooter,
	TableRowColumn,
	TableRow
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const footerTextStyle = {
	float: 'right',
	height: 16,
	paddingTop: 16
};

// footer for the TableTemplate that handles pagination
export default class TableFooter extends Component {
	static muiName = 'TableFooter';

	renderText = () => {
		const { page, rowsPerPage, total } = this.props;
		const start = page * rowsPerPage + 1;
		const end = Math.min(((page + 1) * rowsPerPage), total);
		return `${start} - ${end} of ${total}`;
	}

	render() {
		const { onClick, page, rowsPerPage, total } = this.props;
		return (
			<MuiTableFooter>
				<TableRow>
					<TableRowColumn style={{float: 'right'}}>
						<IconButton
							disabled={page === 0}
							onTouchTap={()=> onClick(-1)}
							>
							<ChevronLeft/>
						</IconButton>
						<IconButton
							disabled={(page + 1) * rowsPerPage >= total}
							onTouchTap={()=> onClick(1)}
							>
							<ChevronRight/>
						</IconButton>
					</TableRowColumn>
					<TableRowColumn style={footerTextStyle}>
						{this.renderText()}
					</TableRowColumn>
				</TableRow>
			</MuiTableFooter>
		);
	}
}

TableFooter.propTypes = {
	onClick: PropTypes.func,
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
	total: PropTypes.number
};
