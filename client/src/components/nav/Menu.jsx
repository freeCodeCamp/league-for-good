import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Help from 'material-ui/svg-icons/action/help';
import Avatar from 'material-ui/Avatar';

import {SportsIcons} from '../sports';
import LogOutModal from './logOut.jsx';

const Menu = props => {
    const { open, logOut, leagues, selectLeague } = props;
 
    return (
    <Drawer open={open}>
		<List style={{marginTop: '70px'}}>
			{
				leagues.map((league,i) => (
					<ListItem 
						key={i}
						primaryText={league.name}
						onClick={() => selectLeague(league)}
						containerElement={<Link to="/dashboard"/>}
						leftIcon={<Avatar  
							backgroundColor='none'
							src={SportsIcons[league.sport_type]}/>}
						/>
					)
				)
			}
			<ListItem 
				primaryText="Create League"
				leftIcon={<AddCircle />}
				containerElement={<Link to="/create" />}
			/>
			<ListItem
				primaryText="Help"
				leftIcon={<Help />}
			/>
			<LogOutModal logOut={logOut} />
      </List>
    </Drawer>
	);
};

export default Menu;
