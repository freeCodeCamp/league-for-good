import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import { generateCardLinks } from './helper/generateCardLinks.jsx';
import { tabs } from './leagueTabLinks';
import { teamSections } from './leagueTabLinks';
import TeamViewWrapper from './teams/teamViewWrapper.jsx';

// CSS for the tabs
const style = {
	view: {
		height: 'auto',
	},
	tab: {
		backgroundColor: "#0288D1",
	},
	inkBar: {
		backgroundColor: '#fff',
		zIndex: 999,
	},
};

// Tabs for each section the user can manage
class LeagueTabs extends React.Component {

	// Initialize to first tab
  	constructor(props) {
    	super(props);
    	this.state = {
    		slideIndex: 0,
    	};
  	}

	// Slide over to another tab when clicked
	  handleChange = (value) => {
    	this.setState({
    	  slideIndex: value,
	    });
	  };

	render() {
		return (
      	<div>
        	<Tabs
        		onChange={this.handleChange}
        		value={this.state.slideIndex}
        		inkBarStyle={style.inkBar}
        	>
        		{
        			tabs.map((tab, i) => {
        				return (
        					<Tab 
	        					label={tab.name}
	        					key={i}
	        					value={i}
	        					style={style.tab}
	        				/>
	        			);
        			})
        		}
        	</Tabs>
        	<SwipeableViews
	        	index={this.state.slideIndex}
    	     	onChangeIndex={this.handleChange}
        	>
        		<div style={style.container}>
        			{generateCardLinks(teamSections)}
        			<TeamViewWrapper />
        		</div>
   				<div style={style.container}>
   					sections
   				</div>
   				<div>
   					players
   				</div>
   				<div>
   					league
   				</div>
        	</SwipeableViews>
      </div>
    );
  }
}

export default LeagueTabs;
