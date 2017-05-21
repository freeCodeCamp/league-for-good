import React from 'react';
import style from './style';
import { TableHeaderColumn, TableRow } from 'material-ui/Table';
import ColumnHeaderChild from './ColHeaderButton.jsx';

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
								direction={props.direction}
								selected={props.selected === i}
							/>
						</TableHeaderColumn>
					);
				})
			}
		</TableRow>
	);
};

export default Headers;