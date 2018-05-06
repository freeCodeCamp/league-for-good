import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

import { cssContent, cssDashboard } from '../../../styles';
import { switchArchiveLeague } from '../../../../actions/index';
import { connect } from 'react-redux';

const LeagueArchiveForm = props => {

    return (
        <div style={cssContent.body}>
            <form
                style={cssDashboard.form}
                >
                <div style={cssDashboard.teams.forms.edit.checkboxWideDiv}>
                    <Field
                        checked={props.initialValues.archived}
                        component={Checkbox}
                        label='Check if team should be archived'
                        labelPosition='left'
                        // labelStyle={cssDashboard.teams.forms.edit.checkboxWide}
                        name='archived'
                    />
                </div>
            </form>
        </div>
    );
};

LeagueArchiveForm.propTypes = {
    handleSubmit: PropTypes.func,
    initialValues: PropTypes.object
};

function mapStateToProps(state) {
    const id = state.league.selected;
    let archived = state.league[id]['archived'];
    let initialValues = { archived };
    return {
        initialValues,
        leagueId: state.league.selected,
        leagueInfo: state.league[id]
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'LeagueArchiveForm',
    onChange: switchArchiveLeague
})(LeagueArchiveForm));
