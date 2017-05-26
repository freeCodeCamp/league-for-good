import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { AutoComplete } from 'redux-form-material-ui';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { findRoster } from '../../../actions/index';
import { common, css_dashboard } from '../../style';

const validate = val => {
	const errors = {};
	if(!val.team){
		errors.team = 'Please select a team'
	}
	return errors;
}

const RosterSearch = props => {
	const { handleSubmit, change, teams, title } = props;

	return (
		<Toolbar>
			<ToolbarTitle text={title}/>
			<ToolbarGroup>
				
				<ToolbarSeparator/>
			<form 
				style={{padding:15}}
				onSubmit={handleSubmit}
			>
				<Field 
					onNewRequest={team => change("team", team)}
					name="team"
					component={AutoComplete}
					filter={AutoComplete.caseInsensitiveFilter}
					floatingLabelText="Team"
					hintText="Find a team's roster"
					dataSource={ teams }
					dataSourceConfig={{text:"name", value:"_id"}}
					maxSearchResults={5}
				/>
				<RaisedButton
					label="Find"
					style={{marginLeft:15}}
					backgroundColor={css_dashboard.raisedButton.backgroundColor}
					type="submit"
				/>				
			</form>
			</ToolbarGroup>
		</Toolbar>
	)
}

export default reduxForm({
	form : 'RosterSearch',
	onSubmit : findRoster,
	validate,
})(RosterSearch)
