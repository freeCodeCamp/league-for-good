import React from 'react';
import { Field } from 'redux-form';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Checkbox } from 'redux-form-material-ui';

const PlayerList = props => {
	return (
		<List>
			<Subheader>{props.teamName}</Subheader>
			{
				props.players.map((player,i) => {

					return (
						<ListItem
							key={player._id}
							leftCheckbox={
								<Field
									component={Checkbox}
									name={`rosters.${props.teamName.toLowerCase()}[${i}].checked`}
								/>
							}
							primaryText={player.fullName}
						/>

					)
				})
			}
		</List>
	)
}

export default PlayerList;
