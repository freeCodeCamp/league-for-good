import React from 'react';
import { css_dashboard } from '../style';

const Header = ({league}) => (
	<div>
		<h2 style={css_dashboard.title}>{ league.name }</h2>
		<h5 style={css_dashboard.subtitle}>{ `${league.sport_type} League` }</h5>
	</div>
);

export default Header;
