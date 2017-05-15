import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { containerCSS, titleCSS } from '../dashboardCSS';

const style = {
	nameCol: {
		width: '20%',
		textAlign: 'left',
	},
	defaultCol: {
		width: (80 / 5) + '%',
		textAlign: 'right',
	},
};

// Table that lists all the teams and the ability to edit each team
class TeamTable extends Component {
	render() {
		const teamAction = this.props.action;
		
		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>
					{
						teamAction === "edit" ?
							'Manage Teams' :
							'Delete Teams'
					}
				</h1>
				<Table>
					<TableHeader displaySelectAll={false} selectable={false}>
						<TableRow>
							<TableHeaderColumn style={style.nameCol}>
								Name
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Roster Size
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Seasons Played
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Staff Size
							</TableHeaderColumn>							
							<TableHeaderColumn style={style.defaultCol}>
								Status
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Edit
							</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						displayRowCheckbox={false}
						showRowHover={true}
					>
						{
							this.props.teams.map(function(team, i) {
								return (
									<TableRow 
										key={i} 
										selectable={false}
									>
										<TableRowColumn style={style.nameCol}>
											<strong>{team.name}</strong>
										</TableRowColumn>
										<TableRowColumn style={style.defaultCol}>
											{team.players.length}
										</TableRowColumn>
										<TableRowColumn style={style.defaultCol}>
											{team.seasons.length}
										</TableRowColumn>
										<TableRowColumn style={style.defaultCol}>
											{team.staff.length}
										</TableRowColumn>
										<TableRowColumn style={style.defaultCol}>
											{team.currently_active ? 
												"Active" : 
												"Not Active"
											}
										</TableRowColumn>
										<TableRowColumn style={style.defaultCol}>
											{
												teamAction === "edit" ?
													<EditIcon /> :
													<DeleteIcon />
											}
										</TableRowColumn>
									</TableRow>
								);
							})
						}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default TeamTable;
