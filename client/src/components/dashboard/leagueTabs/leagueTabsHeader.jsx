import React from 'react';
import {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarTitle
} from 'material-ui/Toolbar';
import { cssDashboard } from '../../style';


const Header = ({league}) => (
	<Toolbar>
		<ToolbarGroup>
			<ToolbarTitle
				style={cssDashboard.toolbar.title}
				text={league.name}
			/>
			<ToolbarSeparator style={cssDashboard.toolbar.separator} />
			<em style={cssDashboard.toolbar.subtitle}>
				{`${league.sport_type} League`}
			</em>
		</ToolbarGroup>
	</Toolbar>
);

export default Header;
