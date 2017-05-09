import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const LeagueToolbar = props => (

	<Toolbar style={{background:'#345', color:'white'}}>
		<ToolbarGroup>
			<ToolbarTitle 
				style={{color:'white'}}
				text={props.league.name}/>
		</ToolbarGroup>
	</Toolbar>

);

export default LeagueToolbar;