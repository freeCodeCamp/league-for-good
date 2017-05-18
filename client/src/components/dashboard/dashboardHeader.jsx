import React from 'react';

const styles = {
	wrapper: {
		textAlign:'center',
	},
};

const Header = ({league}) => (
	<div style={styles.wrapper}>
		<h2>{ league.name }</h2>
		<h5>{ `${league.sport_type} League` }</h5>
	</div>
);

export default Header;