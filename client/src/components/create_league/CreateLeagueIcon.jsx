import React from 'react';
import PropTypes from 'prop-types';

import { cssCreateLeague } from '../styles';

export default class CreateLeagueIcon extends React.Component {
    render() {
        return (
            <img src={this.props.icon} style={cssCreateLeague.sportIcon} />
        );
    }
}

CreateLeagueIcon.propTypes = {
    icon: PropTypes.string
};

CreateLeagueIcon.defaultProps = {
    icon: ''
};
