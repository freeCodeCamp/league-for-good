import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field, reset } from 'redux-form';
import Checkbox from 'material-ui/Checkbox';
import { currTeamsSelector } from '../season_list/seasonData.selector';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { updateTeamsInSeason } from '../../../../actions/index';

const CustomCheckbox = ({ input, label }) => (
	<Checkbox
		checked={input.value ? true : false}
		label={label}
		onCheck={input.onChange}
	/>
);


const CurrTeamsList = props => {
	const { name, range, teamList } = props.season;
  return (
		<form onSubmit={props.handleSubmit}>
			<div style={{textAlign: 'center'}}>
				<h3>Available Teams</h3>
				<p><b>{'Season: ' + name}</b></p>
				<b>{range}</b>
			</div>
			<Divider/>
			{
				teamList.map(team =>
					(<Field
						component={CustomCheckbox}
						key={team._id}
						label={team.name}
						name={team._id}
					/>)
				)
			}
			<RaisedButton
				label='Update'
				primary={true}
				type='submit'
			/>
			<RaisedButton
				label='Reset'
				onTouchTap={() => props.dispatch(reset('UpdateTeamsInSeasonForm'))}
				secondary={true}
			/>
		</form>
	);
};

CustomCheckbox.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string
};

CurrTeamsList.propTypes = {
	dispatch: PropTypes.func,
	handleSubmit: PropTypes.func,
	initialValues: PropTypes.object,
	season: PropTypes.object
};

const FormWrapper = reduxForm({
	form: 'UpdateTeamsInSeasonForm',
	onSubmit: updateTeamsInSeason
})(CurrTeamsList);

const selector = currTeamsSelector();

function mapStateToProps(state, ownProps) {
	const {
		initialValues,
		...season
	} = selector(state, ownProps);
	return { season, initialValues };
}

export default connect(mapStateToProps)(FormWrapper);

