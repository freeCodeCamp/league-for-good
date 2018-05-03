import React from 'react';
import PropTypes from 'prop-types';

import { cssCreateLeague } from '../styles';

const CreateLeagueIcon = (props) => (
    <img src={props.icon} style={cssCreateLeague.sportIcon} />
);

CreateLeagueIcon.propTypes = {
    icon: PropTypes.string
};

CreateLeagueIcon.defaultProps = {
    icon: ''
};

export default CreateLeagueIcon;
