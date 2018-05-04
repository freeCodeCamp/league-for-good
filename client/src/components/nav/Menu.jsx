import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Help from 'material-ui/svg-icons/action/help';
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';
import * as Links from '../routes';

import Avatar from 'material-ui/Avatar';

import {SportsIcons} from '../sports';
import { cssMenu } from '../styles';

const Menu = props => {
	const { open, leagues, selectLeague, openModal } = props;

	return (
		<Drawer open={open} width={'15%'}>
			<List style={cssMenu.drawer.list}>
				{
					leagues.filter(league => league.archived === false)
						.map((league, i) => {
							console.log(league);
							return (
							<ListItem
								containerElement={<Link to={Links.TEAM_LIST}/>}
								key={i}
								leftIcon={
									<Avatar
										backgroundColor={cssMenu.avatar.backgroundColor}
										src={SportsIcons[league.sportType]}
									/>
								}
								onClick={() => selectLeague(league)}
								primaryText={league.name}
							/>
							);
						}
					)
				}
				{ leagues.filter(league => league.archived === false).length > 0 ?
					<Divider /> :
					<noScript />
				}
				{
					leagues.filter(league => league.archived === true)
						.map((league, i) => (
							<ListItem
								containerElement={<Link to={Links.TEAM_LIST} />}
								key={i}
								leftIcon={
									<Avatar
										backgroundColor={cssMenu.avatar.backgroundColor}
										src={SportsIcons[league.sportType]}
									/>
								}
								onClick={() => selectLeague(league)}
								primaryText={league.name}
							/>
						)
					)
				}
				{leagues.filter(league => league.archived === true).length > 0 ?
					<Divider /> :
					<noScript />
				}
				<ListItem
					containerElement={<Link to='/create' />}
					leftIcon={<AddCircle />}
					primaryText='Create League'
				/>
				<ListItem
					containerElement={<Link to='/help' />}
					leftIcon={<Help />}
					primaryText='Help'
				/>
				<ListItem
					leftIcon={<LogOutIcon/>}
					onTouchTap={()=> openModal('logout')}
					primaryText='Log out'
				/>
			</List>
		</Drawer>
	);
};

Menu.propTypes = {
	leagues: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
	openModal: PropTypes.func,
	selectLeague: PropTypes.func
};

export default Menu;
