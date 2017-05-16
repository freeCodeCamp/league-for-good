import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { containerCSS, titleCSS } from '../dashboardCSS';

const style = {
	nameCol: {
		width: '30%',
		textAlign: 'left',
	},
	defaultCol: {
		width: '20%',
		textAlign: 'left',
	},
	iconCol: {
		width: '10%',
		textAlign: 'right',
	},
	search: {
		marginLeft: '20px',
	},
	searchUnderline: {
		borderColor: '#2196F3',
	},
};

const ColumnHeaderChild = (props) => {
	return (
		<div onClick={props.onClick}>
			{props.colTitle}
		</div>
	);
};

// Table that lists all the teams and the ability to edit or delete each team
class TeamTable extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			teams: Array.from(this.props.teams),
			sortColumn: '',
			sortDirection: 'none',
		};
	}
	
	// Change state of teams based on panel rendered
	componentWillReceiveProps(nextProps) {
		if (this.props.teams !== nextProps.teams) {
			this.setState({
				teams: Array.from(nextProps.teams)
			});
		}
	}
	
	// Search for teams
	onSearch(event, newValue) {
		let teamName = '';
		this.setState({
			teams: this.props.teams.filter((team) => {
				teamName = team.name.toLowerCase();
				return teamName.indexOf(newValue.toLowerCase()) === 0;
			})
		});
	}
	
	// Sort when clicked
	onSort() {
		let sortDirection = this.sortMap[this.state.sortDirection];
		let sortedTeams;
		
		if (sortDirection !== 'none') {
			sortedTeams = this.state.teams.sort(
				this.sortColumn(sortDirection)
			);
		}
		else {
			sortedTeams = Array.from(this.props.teams);
		}
	
		this.setState({
			teams: sortedTeams,
			sortColumn: 'name',
			sortDirection: sortDirection,
		});
	}
	
	sortMap = {
		'none': 'asc',
		'asc': 'desc',
		'desc': 'none',
	}
	
	// sort column based on a direction
	sortColumn(direction) {
		if (direction === 'asc') {
			return function(a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			}
		}
		if (direction === 'desc') {
			return function(a, b) {
				if (b.name < a.name) {
					return -1;
				}
				if (b.name > a.name) {
					return 1;
				}
				return 0;
			}
		}
		return 'none';
	}
	
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
				<TextField 
					hintText={<SearchIcon />}
      				underlineFocusStyle={style.searchUnderline}
      				style={style.search}
      				floatingLabelText="Search"
      				floatingLabelFixed={true}
      				onChange={this.onSearch.bind(this)}
    			/>
				<Table>
					<TableHeader 
						adjustForCheckbox={false}
						displaySelectAll={false} 
						selectable={false}
					>
						<TableRow>
							<TableHeaderColumn style={style.nameCol}>
								<ColumnHeaderChild 
									colTitle="Name" 
									onClick={this.onSort.bind(this)}
								/>
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Roster Size
							</TableHeaderColumn>
							<TableHeaderColumn style={style.defaultCol}>
								Seasons Played
							</TableHeaderColumn>							
							<TableHeaderColumn style={style.defaultCol}>
								Status
							</TableHeaderColumn>
							<TableHeaderColumn style={style.iconCol}>
							</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						displayRowCheckbox={false}
						showRowHover={true}
					>
						{
							this.state.teams.map(function(team, i) {
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
											{team.currently_active ? 
												"Active" : 
												"Not Active"
											}
										</TableRowColumn>
										<TableRowColumn style={style.iconCol}>
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
