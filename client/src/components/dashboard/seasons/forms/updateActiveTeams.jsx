import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm, Field, propTypes as reduxFormProps } from 'redux-form';
import Checkbox from 'material-ui/Checkbox';
import { currTeamsSelector } from '../season_list/seasonData.selector';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { updateTeamsInSeason } from '../../../../actions/index';
import Navigation from '../../helper/NavigationArrow.jsx';
import FormButtons from '../../helper/FormBtns.jsx';

const rootStyle = {
	width: '90%',
	padding: 10,
	margin: '10px auto 15px'
};

const checkBoxStyle = {
	marginBottom:5, 
	width:'40%'
};



const CustomCheckbox = ({ input, label }) => (
	<div style={checkBoxStyle}>
		<Checkbox
			checked={input.value ? true : false}
			label={label}
			onCheck={input.onChange}
		/>
	</div>
);

const CurrTeamsList = props => {
	const { name, range, teamList } = props.season;
  return (
  	<div>
  		<Divider/>
			<Navigation tooltip="Back to seasons list">
				<span>
					<h3>Available Teams</h3>
					<p><b>{'Season: ' + name}</b></p>
					<p><b>{range}</b></p>				
				</span>
			</Navigation>
			<Divider/>
			<form 
				onSubmit={props.handleSubmit}
				style={rootStyle}
				>

				{
					teamList.map(team =>
						(
							<Field
								component={CustomCheckbox}
								key={team._id}
								label={team.name}
								name={team._id}
							/>
							
						)
					)
				}
				<FormButtons
					dispatch={props.dispatch}
					formName='UpdateTeamsInSeason'
					submitLabel='Update'
				/>
			</form>
		</div>
	);
};

CustomCheckbox.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string
};

CurrTeamsList.propTypes = {
	...reduxFormProps,
	season: PropTypes.object
};

const FormWrapper = reduxForm({
	form: 'UpdateTeamsInSeason',
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

