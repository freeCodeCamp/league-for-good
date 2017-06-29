import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import { generateLinks } from './tab_navbar/generateLinks.jsx';
import { tabs } from './leagueTabData';
import { cssContent, cssDashboard } from '../../style';

import TeamRoutes from '../teams/routes.jsx';
import PlayerRoutes from '../players/routes.jsx';
import SettingsRoutes from '../settings/routes.jsx';

// Routes for each tab tab. Any possible view associated with a tab
const routes = {
	Teams: <TeamRoutes />,
	Players: <PlayerRoutes />,
	Seasons: <div />,
	Settings: <SettingsRoutes />
};

// Tabs for each section the user can manage
const LeagueTabs = ({history, leagueId}) => {

	return (
		<Tabs inkBarStyle={cssDashboard.tabs.inkBar}>
			{
				tabs.map((tab, i) => (
					<Tab
						label={tab.name}
						key={i}
						style={cssDashboard.tabs.tab}
						onActive={()=> history.push(tab.links[0].url)}
						>
						{generateLinks(tab.links, leagueId)}
						{routes[tab.name]}
					</Tab>
					)
				)
			}
		</Tabs>
	);
};


export default LeagueTabs;
