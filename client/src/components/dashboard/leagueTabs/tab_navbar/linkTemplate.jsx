// A template helper class to generate new links for panels under tabs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeManageView } from '../../../../actions/index';
import IconButton from 'material-ui/IconButton';
import { css_content } from '../../../style';
import { Link, withRouter } from 'react-router-dom';

const LinkTemplate = props => {
	
	const { description, url, leagueId, icon, location: {pathname}} = props;
		
	const { iconNavbar: { iconButton }} = css_content;
		
	const linkIsActive = url && pathname.match(url) && pathname !== '/dashboard'; 
		//In progress..... Checks if icon should be highlighted

	return (
		<Link to={{ pathname:url, state: {leagueId} }}>
			<IconButton
				tooltipPosition="bottom-right"
				tooltip={description}
				touch={true}
				style={iconButton.style}
				iconStyle={ linkIsActive ? iconButton.iconStyle : "" } 
				hoveredStyle={iconButton.hoveredStyle}
			>
				{icon}
			</IconButton>
		</Link>
	);
};

export default withRouter(LinkTemplate);


