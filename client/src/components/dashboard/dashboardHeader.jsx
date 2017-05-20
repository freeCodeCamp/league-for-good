import React from 'react';

const style = {
	center: {
		textAlign:'center',
	},
	h2: {
		paddingTop: '20px',
		margin: '0px',
	},
};

const Header = ({league}) => (
	<div style={style.center}>
		<h2 style={style.h2}>{ league.name }</h2>
		<h5>{ `${league.sport_type} League` }</h5>
	</div>
);

export default Header;
