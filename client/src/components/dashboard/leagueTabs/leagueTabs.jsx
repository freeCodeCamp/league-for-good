import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import { generateLinks } from './tab_navbar/generateLinks.jsx';
import { tabs } from './leagueTabData';
import { css_content, css_dashboard } from '../../style';

import TeamRoutes from '../teams/routes.jsx';
import PlayerRoutes from '../players/routes.jsx';

// Routes for each tab tab. Any possible view associated with a tab
const routes = {
	Teams: <TeamRoutes/>,
	Players: <PlayerRoutes/>,
	Seasons: <div></div>,
	Settings: <div></div>,
}

// Tabs for each section the user can manage
const LeagueTabs = props => {
	
	return (
		<Tabs inkBarStyle={css_dashboard.tabs.inkBar}>
			{
				tabs.map((tab, i) => (
					<Tab 
						label={tab.name}
						key={i}
						style={css_dashboard.tabs.tab}
					>
						{generateLinks(tab.links, props.leagueId)}
						{routes[tab.name]}	
					</Tab>
					)
				)
			}
		</Tabs>
	);
}


export default LeagueTabs;
