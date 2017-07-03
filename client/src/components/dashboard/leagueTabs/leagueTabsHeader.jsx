import React from 'react';
import PropTypes from 'prop-types';
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
				{`${league.sportType} League`}
			</em>
		</ToolbarGroup>
	</Toolbar>
);

Header.propTypes = {
	league: PropTypes.object
};

export default Header;
