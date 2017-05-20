import React from 'react';
import style from './style';
import {
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

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
};

export default renderBody;