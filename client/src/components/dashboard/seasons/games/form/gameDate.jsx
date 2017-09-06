import React from 'react';
import { Field } from 'redux-form';
import { cssDashboard } from '../../../../style';
import {
	TextField,
	TimePicker,
	DatePicker
} from 'redux-form-material-ui';


const GameDate = () => (
	<div style={cssDashboard.formRow}>
		<Field
			autoOk={true}
			component={DatePicker}
			floatingLabelStyle={cssDashboard.formRequired}
			floatingLabelText='Date'
			format={v => v ? new Date(v) : null}
			formatDate={d => d.toDateString()}
			name='datePlayed'
		/>
		<Field
			autoOk={true}
			component={TimePicker}
			floatingLabelStyle={cssDashboard.formRequired}
			floatingLabelText='Time'
			format={null}
			name='datePlayed'
			props={{format: 'ampm'}}
		/>
		<Field
			component={TextField}
			floatingLabelText='Venue'
			name='venue'
		/>
	</div>
);

export default GameDate;


