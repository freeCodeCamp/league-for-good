import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { css_dashboard as css} from '../../style';


const Header = ({league}) => (
	<Toolbar style={css.toolbar}>
		<ToolbarGroup>
			<ToolbarTitle 
				style={css.toolbarTitle}
				text={league.name}
			/>
			<ToolbarSeparator/>
			<em style={css.toolbarSubtitle}>
				{`${league.sport_type} League`} 
			</em>
		</ToolbarGroup>
	</Toolbar>
);

export default Header;
// 
