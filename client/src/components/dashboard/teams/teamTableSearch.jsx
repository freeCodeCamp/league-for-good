import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



//Dropdown of team names for filtering out a team to update/delete
export default class TableDropdown extends Component{

	state = { value: null };

	handleChange = (e, i, value) => {
		this.props.handleChange(value);

		const newValue = value == 'All'? null : value;
		this.setState({ value: newValue });
	}


 	render(){
 		return(
    <SelectField
    	style={{marginLeft:15}}
      hintText="Select a name"
      value={this.state.value}
      onChange={this.handleChange}
    >
			<MenuItem 
				value="All" 
				primaryText="Show All Teams"
			/>
			{
			this.props.teams.map(team => (
      	<MenuItem
        	key={team._id}
        	value={team._id}
        	primaryText={team.name}
      	/>
    		)
    	)
		}
   </SelectField>
	);
 	}
}