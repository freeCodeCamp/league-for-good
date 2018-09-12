import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import PropTypes from 'prop-types';

import { cssContent, cssDashboard } from '../../../styles';
import RaisedButton from 'material-ui/RaisedButton';
import { editLeague, openSnackbar } from '../../../../actions/index';
import { connect } from 'react-redux';

const EditLeageNameForm = props => {
    // this appears to be a ref, function actually loads in the
    // connect->reduxForm?
    const { handleSubmit } = props;
    return (
        <div style={cssContent.body}>
            <h1 style={cssDashboard.title}>Enter New League Name</h1>
            <form
                onSubmit={handleSubmit}
                style={cssDashboard.form}
                >
            <Field
                component={TextField}
                floatingLabelText='Enter New League Name'
                hintText='New Name here'
                name='leagueName'
                style={cssDashboard.settings.forms.add.textField}
            />
            <RaisedButton
                backgroundColor={cssDashboard.raisedButton.backgroundColor}
                label='Change League Name'
                labelStyle={cssDashboard.raisedButton.label}
                style={cssDashboard.raisedButton.style}
                type='submit'
            />
            </form>
        </div>
    );
};

EditLeageNameForm.propTypes = {
    handleSubmit: PropTypes.func
};

function mapStateToProps(state) {
    const id = state.league.selected;
    return {
        leagueId: state.league.selected,
        leagueInfo: state.league[id],
        snackbar: state.snackbar
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'EditLeagueNameForm',
    onSubmit: editLeague,
    onSubmitSuccess: openSnackbar
})( EditLeageNameForm ));
