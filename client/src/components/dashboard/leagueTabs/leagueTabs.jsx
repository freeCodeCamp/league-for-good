import React from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import { generateLinks } from './tab_navbar/generateLinks.jsx';
import { tabs } from './leagueTabData';
import { cssDashboard } from '../../styles';

import TeamRoutes from '../teams/routes.jsx';
import PlayerRoutes from '../players/routes.jsx';
import SettingsRoutes from '../settings/routes.jsx';
import SeasonRoutes from '../seasons/routes.jsx';

// Routes for each tab tab. Any possible view associated with a tab
const routes = {
	Teams: <TeamRoutes />,
	Players: <PlayerRoutes />,
	Seasons: <SeasonRoutes />,
	Settings: <SettingsRoutes />
};

// Tabs for each section the user can manage
const LeagueTabs = ({history, leagueId}) => {

	return (
		<Tabs inkBarStyle={cssDashboard.tabs.inkBar}>
			{
				tabs.map((tab, i) => (
					<Tab
						key={i}
						label={tab.name}
						onActive={()=> history.push(tab.links[0].url)}
						style={cssDashboard.tabs.tab}
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

LeagueTabs.propTypes = {
	history: PropTypes.object,
	leagueId: PropTypes.string
};

export default LeagueTabs;
