import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AutoComplete, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import { assignPlayer, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';

let AssignPlayerForm = props => {
	const {teams, players, handleSubmit } = props;
	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Assign a player to a team</h1>
			<form 
				style={css_dashboard.form}
				onSubmit={handleSubmit}
			>	
				<div style={css_dashboard.formRow}>	
					<Field 
						name="team.teamId"
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText="Team"
						dataSource={teams}
						dataSourceConfig={{text:"name", value:"_id"}}
						maxSearchResults={5}
					/>
					<Field
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={players}
						maxSearchResults={3}
						dataSourceConfig={{text:'full_name', value:'_id'}}
						floatingLabelText="Select a player"
						name="playerId"
					/>
				</div>	
				<div style={css_dashboard.formRow}>
					<Field
						component={TextField}
						type="number"
						floatingLabelText="Jersey Number"
						name="team.jersey_num"
					/>
					<Field
						component={TextField}
						floatingLabelText="Position(s)"
						name="team.position"
					/>
				</div>
				
				<br/>				
				<RaisedButton
					type="submit"
					label="Submit"

					fullWidth={true}
					primary={true}
				/>

			</form>
		</div>
	)
}

const mapState = ({players, teams}) => ({teams, players: players.list});

AssignPlayerForm = connect(mapState)(AssignPlayerForm);

export default reduxForm({ 
	form: 'AssignPlayerForm',
	onSubmit: assignPlayer, 
	onSubmitSuccess: openSnackbar, 
})(AssignPlayerForm)