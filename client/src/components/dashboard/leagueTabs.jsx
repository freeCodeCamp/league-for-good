import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeManageView } from '../../actions/index';

import { Tabs, Tab } from 'material-ui/Tabs';

import { generateLinks } from './helper/generateLinks.jsx';
import { tabs } from './leagueTabData';
import PanelViewWrapper from './PanelViewWrapper.jsx';
import { css_content, css_dashboard } from '../style';


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
						onActive={() => props.changeManageView(null)}
					>
						<div>
							{generateLinks(tab.links)}
							<PanelViewWrapper {...props} tab={tab} />
						</div>
					</Tab>
					)
				)
			}
		</Tabs>
	);
}


export default LeagueTabs;
