import React from 'react';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { css_content, css_dashboard } from '../../../style';

import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';

const Player = ({ player, history }) => {
	console.log(player);
	if (!player) {
		return (
			<h2>...Loading</h2>
		);
	}

	return (
		<div style={css_content.body}>
			<IconButton 
				onTouchTap={() => history.goBack()}
				tooltip="Back"
			>
				<BackArrow />
			</IconButton>
			<h1 style={css_dashboard.title}>
				{player.full_name}
			</h1>
			<h4>Email: {player.email}</h4>
			<h4>Phone: {player.phone_num}</h4>
			{
				player.address && <div> 
					<h3 style={css_dashboard.title}>
						Address
					</h3>
					<h4>Street: {player.address.street}</h4>
					<h4>City: {player.address.city}</h4>
					<h4>State: {player.address.state}</h4>
					<h4>Country: {player.address.country}</h4>				
				</div>
			}
			<hr/>
		</div>
	);
};

function mapStateToProps(){
	
	return { player: players.selected };
}

export default connect(mapStateToProps)(Player);
