import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { generateLinks } from './helper/generateLinks.jsx';
import { tabs } from './leagueTabData';
import PanelViewWrapper from './PanelViewWrapper.jsx';

// CSS for the tabs
const style = {
	view: {
		height: 'auto',
	},
	tab: {
		backgroundColor: '#0288D1',
	},
	inkBar: {
		backgroundColor: '#91dcff',
		zIndex: 999,
	},
};

// Tabs for each section the user can manage
const LeagueTabs = props => (
	<div>
		<Tabs inkBarStyle={style.inkBar}>
      {
				tabs.map((tab, i) => (
					<Tab 
						label={tab.name}
						key={i}
						style={style.tab}
					>
						<div>
							{generateLinks(tab.links)}
							<PanelViewWrapper {...props}/>
						</div>
					</Tab>
					)
				)
			}
		</Tabs>
	</div>
);


export default LeagueTabs;
