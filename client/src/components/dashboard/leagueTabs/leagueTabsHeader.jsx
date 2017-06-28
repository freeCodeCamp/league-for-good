import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { css_dashboard } from '../../style';


const Header = ({league}) => (
	<Toolbar>
		<ToolbarGroup>
			<ToolbarTitle
				style={css_dashboard.toolbar.title}
				text={league.name}
			/>
			<ToolbarSeparator style={css_dashboard.toolbar.separator} />
			<em style={css_dashboard.toolbar.subtitle}>
				{`${league.sport_type} League`}
			</em>
		</ToolbarGroup>
	</Toolbar>
);

export default Header;
