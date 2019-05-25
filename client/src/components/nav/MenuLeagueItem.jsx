import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import * as Links from '../routes';

import Avatar from 'material-ui/Avatar';

import { SportsIcons } from '../sports';
import { cssMenu } from '../styles';

const MenuLeagueItem = props => {
    const { league, selectLeague } = props;

    return (
        <ListItem
            containerElement={<Link to={Links.TEAM_LIST} />}
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
};

MenuLeagueItem.propTypes = {
    league: PropTypes.object,
    selectLeague: PropTypes.func
};

export default MenuLeagueItem;
