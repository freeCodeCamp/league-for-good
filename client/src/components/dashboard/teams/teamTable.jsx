import React, {Component} from 'react';
import { css_content, css_dashboard } from '../../style';
import TableTemplate from '../helper/tableTemplate.jsx';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

import getRowData,{colData} from './teamData';

// Table that lists all the teams and the ability to edit or delete each team
  export default class TeamTable extends Component{

  	state = {
  		filterValue: 1,
  		searchText: '',
  	}

  	handleChange = (e, i, filterValue) => {
  		this.setState({ filterValue })
  	}

  	onSearch = e => {
      this.setState({ searchText: e.target.value });
  	}

    // Filter the team list array with params in state
    formatTeams(){
      const { filterValue, searchText } = this.state;
      let { teams } = this.props;
      const regex = new RegExp(searchText, 'i');
      
        return teams.filter(team => {
          let filterFlag;
          let searchFlag = searchText.length ? regex.test(team.name) : true;

          if(filterValue === 1) {
          	filterFlag = true;
          }
          else if(filterValue === 2) {
            filterFlag = team.currently_active;
          }
          else{
            filterFlag = !team.currently_active;
          }

          return searchFlag && filterFlag;
        });     
    }

	render(){
		const teams = this.formatTeams();
		return (
			<div>	
				<Toolbar style={css_content.body}>
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
				<div>
					<TableTemplate 
						headers={colData}
						rows={getRowData({teams})}
					/>
				</div>
			</div>
	    );
  	}
  }




