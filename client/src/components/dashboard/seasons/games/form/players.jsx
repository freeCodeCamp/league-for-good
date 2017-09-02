import React from 'react';
import propTypes from 'prop-types';
import { Field } from 'redux-form';
import {List, ListItem} from 'material-ui/List';
// import ActionInfo from 'material-ui/svg-icons/action/info';
// import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Checkbox } from 'redux-form-material-ui';

const PlayerList = ({ teamName, players }) => (
	<List>
		<Subheader>{teamName}</Subheader>
		{
			players.map((player, i) => (
					<ListItem
						key={player._id}
						leftCheckbox={
							<Field
								component={Checkbox}
								name={`rosters.${teamName.toLowerCase()}[${i}].checked`}
							/>
						}
						primaryText={player.fullName}
					/>
				)
			)
		}
	</List>
);

PlayerList.propTypes = {
	players: propTypes.array,
	teamName: propTypes.string
};

export default PlayerList;
