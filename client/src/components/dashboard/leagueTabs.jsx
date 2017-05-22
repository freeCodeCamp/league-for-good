import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeManageView } from '../../actions/index';

import { Tabs, Tab } from 'material-ui/Tabs';

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
								onActive={() => this.props.changeManageView(null)}
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeManageView }, dispatch);
}

export default connect(null, mapDispatchToProps)(LeagueTabs);
