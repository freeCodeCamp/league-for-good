// A template helper class to generate new links for panels under tabs
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import { cssContent } from '../../../style';
import { Link, withRouter } from 'react-router-dom';

const LinkTemplate = props => {

	const { description, url, leagueId, icon, location: {pathname}} = props;

	const { iconNavbar: { iconButton }} = cssContent;

	const linkIsActive = url && pathname.match(url) && pathname !== '/dashboard';
		// In progress..... Checks if icon should be highlighted

	return (
		<Link to={{ pathname: url, state: {leagueId} }}>
			<IconButton
				hoveredStyle={iconButton.hoveredStyle}
				iconStyle={ linkIsActive ? iconButton.iconStyle : {} }
				style={iconButton.style}
				tooltip={description}
				tooltipPosition="bottom-right"
				touch={true}
				>
				{icon}
			</IconButton>
		</Link>
	);
};

LinkTemplate.propTypes = {
	description: PropTypes.string,
	icon: PropTypes.object,
	leagueId: PropTypes.string,
	location: PropTypes.object,
	url: PropTypes.string
};

export default withRouter(LinkTemplate);


