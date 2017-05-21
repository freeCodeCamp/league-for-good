import React, { Component } from 'react';
import { Table, TableBody, TableHeader } from 'material-ui/Table';

import renderBody from './TableBody.jsx';
import Headers from './TableHeaders.jsx';
import SearchTable from './Search.jsx';

import { containerCSS, titleCSS } from '../../dashboardCSS';
import { orderBy } from 'lodash';


// Table that lists all the teams and the ability to edit or delete each team
class TableTemplate extends Component {
	
	state = { 
		selected: 0, 
		direction: 'asc' 
	};
	
	onSort = sortIndex => {		
		const { selected, direction } = this.state;
		let newDirection = direction;
		let newSelection = sortIndex;

		if( selected === sortIndex ){
			
			if( direction === 'asc' ){			
				newDirection = 'desc';
			}else if( direction === 'desc' ){
				newDirection = 'asc';
				newSelection = -1;
			}
		}
		this.setState({ 
			selected: newSelection, 
			direction: newDirection, 
		});
	}
	
	renderRows({ selected , direction }){
		const { rows } = this.props;
		const sortFunc = row => row[selected].value;
		
		let rowData = rows;

		if( selected > -1 ){
			rowData = orderBy(rows, sortFunc, direction);
		}
		return renderBody(rowData);
	}

	onSearch = input =>{ 
		return input;
	}

	render() {
		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>{this.props.title}</h1>;
				<SearchTable onSearch={this.onSearch}/>
				<Table>
					<TableHeader 
						adjustForCheckbox={false}
						displaySelectAll={false} 
						selectable={false}
					>
						<Headers 
							headers={this.props.headers}
							onSort={this.onSort}
							direction={this.state.direction}
							selected={this.state.selected}
						/>
					</TableHeader>
					<TableBody
						preScanRows={false}
						displayRowCheckbox={false}
						showRowHover={true}
					>
						{this.renderRows(this.state)}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default TableTemplate;
