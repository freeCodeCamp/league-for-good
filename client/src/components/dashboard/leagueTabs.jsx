import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeManageView } from '../../actions/index';

import { Tabs, Tab } from 'material-ui/Tabs';

import { generateLinks } from './helper/generateLinks.jsx';
import { tabs } from './leagueTabData';
import PanelViewWrapper from './PanelViewWrapper.jsx';
import { css_content, css_dashboard } from '../style';

import { findIndex } from 'lodash';

// Tabs for each section the user can manage
const LeagueTabs = props => {

	const { view } = props;
	
	//Index of tab that should render inner content
	const selectedTabIndex = findIndex(tabs, tab => {
		return tab.links.some(link => link.label === view);
	}) 

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
							{
								selectedTabIndex === i && <PanelViewWrapper {...props} />
							}
						</div>
					</Tab>
					)
				)
			}
		</Tabs>
	);
}


export default LeagueTabs;
