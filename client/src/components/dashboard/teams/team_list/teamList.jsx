import React, { Component } from 'react';
import { css_content, css_dashboard } from '../../../style';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

import getRowData,{ colData } from './teamData';

import { connect } from 'react-redux';

// Table that lists all the teams and the ability to edit or delete each team
class TeamTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
  			filterValue: "all",
  		}
  	}

  	handleChange = (e, i, filterValue) => {
  		this.setState({ filterValue });
  	}

    // Filter the team list array with params in state
    formatTeams() {
    	const { filterValue } = this.state;
    	let { teams } = this.props;
      
    	return teams.filter(team => {
    		let filterFlag;

    		if (filterValue === 'all') {
    			filterFlag = true;
    		}
    		else if (filterValue === 'active') {
    			filterFlag = team.currently_active;
    		}
    		else {
    			filterFlag = !team.currently_active;
    		}

    		return filterFlag;
    	});     
    }

	render() {
		const teams = this.formatTeams();
		
		return (
			<div style={css_content.body}>	
				<DropDownMenu 
					value={this.state.filterValue} 
					onChange={this.handleChange}
					style={css_dashboard.table.teams.dropdown}
				>
					<MenuItem value="all" primaryText="All Teams" />
				   	<MenuItem value="active" primaryText="Active Teams" />
				   	<MenuItem value="archived" primaryText="Archived Teams" />
				</DropDownMenu>
				<TableTemplate 
					headers={colData}
					rows={getRowData({teams})}
				/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { teams: state.teams };
}

export default connect(mapStateToProps)(TeamTable);


