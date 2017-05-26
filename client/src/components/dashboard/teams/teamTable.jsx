import React, {Component} from 'react';
import { css_content, css_dashboard } from '../../style';
import TableTemplate from '../helper/tableTemplate.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import getRowData, { colData } from './teamData';



// Table that lists all the teams and the ability to edit or delete each team
  export default class TeamTable extends Component{

  	state = {
  		filterValue: 1,
  		searchText: '',
  		teams: [...this.props.teams],
  	}

  	// Return a new array filters by team's
  	filterByStatus = ({filterValue}) => {
  		const { teams } = this.props;
  		
  		switch( filterValue ) {

  		case 1:
  			return teams;
  		case 2:
  			return teams.filter(row => row.currently_active);
  		case 3:
  			return teams.filter(row => !row.currently_active);		
  		}
  	}

  	handleChange = (e, i, filterValue) => {
  		
  		const teams = this.filterByStatus({filterValue});

  		this.setState({ teams, filterValue })
  	}

  	//filter by team name and active status
  	onSearch = e => {
  		const searchText = e.target.value;
  		const regex = new RegExp(searchText, 'i');
  		const { filterValue } = this.state;

  		let teams;
  		

  		if( searchText.trim().length ){
  			
  			teams = this.props.teams.filter(team => {
  				let flag;
  				if(filterValue === 1) {
  					flag = true;
  				}
  				else if(filterValue === 2) {
  					flag = team.currently_active;
  				}
  				else{
  					flag = !team.currently_active;
  				}

  				return regex.test(team.name) && flag;
  			});

  		}
  		else{
  			teams = this.filterByStatus(this.state);
  		}

  		this.setState({ searchText, teams });

  	}

  	render(){
	    return (
	    <div>	
	      <Toolbar style={css_content.header}>
	        <ToolbarGroup firstChild={true}>
	          <DropDownMenu iconStyle={{color:'black'}} value={this.state.filterValue} onChange={this.handleChange}>
	            <MenuItem value={1} primaryText="All Teams" />
	            <MenuItem value={2} primaryText="Active Teams" />
	            <MenuItem value={3} primaryText="Archived Teams" />
	          </DropDownMenu>
	        </ToolbarGroup>
	        <ToolbarGroup>
						<TextField 
							hintText={<SearchIcon />}
							underlineFocusStyle={css_dashboard.table.searchUnderline}
							style={css_dashboard.table.search}
							floatingLabelText="Search"
							floatingLabelFixed={true}
							value={this.state.searchText}
							onChange={this.onSearch}
						/>	        	
	        </ToolbarGroup>
	      </Toolbar>
	      
	      <div style={css_content.body}>
					<TableTemplate 
						headers={colData}
						rows={getRowData(this.state)}
					/>
				</div>
	    </div>  
	    );
  	}
  }




