import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Help from 'material-ui/svg-icons/action/help';
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import * as Links from '../routes';

import Avatar from 'material-ui/Avatar';

import {SportsIcons} from '../sports';
import { cssMenu } from '../style';


const Menu = props => {
	const { open, leagues, selectLeague, openModal } = props;

	return (
		<Drawer open={open} width={'15%'}>
			<List style={cssMenu.drawer.list}>
				{
					leagues.map((league, i) => (
						<ListItem
							key={i}
							primaryText={league.name}
							onClick={() => selectLeague(league)}
							containerElement={<Link to={Links.TEAM_LIST}/>}
							leftIcon={<Avatar
								backgroundColor={cssMenu.avatar.backgroundColor}
								src={SportsIcons[league.sport_type]}
							/>}
						/>
						)
					)
				}
				<ListItem
					primaryText='Create League'
					leftIcon={<AddCircle />}
					containerElement={<Link to='/create' />}
				/>
				<ListItem
					primaryText='Help'
					leftIcon={<Help />}
					containerElement={<Link to='/help' />}
				/>
			<ListItem
				primaryText='Log out'
				onTouchTap={()=> openModal('logout')}
				leftIcon={<LogOutIcon/>}
			/>
		</List>
    </Drawer>
	);
};

export default Menu;
