import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';
import { withRouter } from 'react-router-dom';

/*
A component to be placed above a rendered view contains
an SVG arrow to navigate back to the previous view

You can optionially include text for a title or heading as
a child component
*/

const rootStyle = {
	display: 'flex',
	width: '100%',
	alignItems: 'center'
};

const TableNavigation = props => (
	<div style={rootStyle}>
		<div style={{width: '5%'}}>
			<IconButton
				onTouchTap={() => props.history.goBack()}
				tooltip={props.tooltip}
				>
				<BackArrow/>
			</IconButton>
		</div>
		<div style={{width: '95%', textAlign: 'center'}}>
			{props.children}
		</div>
	</div>
);

TableNavigation.propTypes = {
	children: PropTypes.element,
	history: PropTypes.object,
	tooltip: PropTypes.string
};

// access react-router's history object using this higher order component
export default withRouter(TableNavigation);
