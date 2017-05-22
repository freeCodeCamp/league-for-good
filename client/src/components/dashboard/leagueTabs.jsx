import React, { Component } from 'react';

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
class LeagueTabs extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.view);
		
		this.state = {
			view: this.props.view
		};
	}
	
	componentWillReceiveProps(nextProps) {
		/*this.setState({
			view: null
		});*/
	}
	
	changeTab(tabName) {
		this.setState({
			view: tabName
		});
	}

	render() {
		return (
			<div>
				<Tabs inkBarStyle={style.inkBar}>
					{
						tabs.map((tab, i) => (
							<Tab 
								label={tab.name}
								key={i}
								style={style.tab}
								onClick={this.changeTab.bind(this, tab.name)}
							>
								<div>
									{generateLinks(tab.links)}
									<PanelViewWrapper {...this.props} />
								</div>
							</Tab>
							)
						)
					}
				</Tabs>
			</div>
		);
	}
}


export default LeagueTabs;
