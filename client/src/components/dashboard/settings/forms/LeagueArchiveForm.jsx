import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import PropTypes from 'prop-types';

import { cssContent, cssDashboard } from '../../../styles';
import { editLeague, openSnackbar } from '../../../../actions/index';
import { connect } from 'react-redux';

const LeagueArchiveForm = props => {
    // this appears to be a ref, function actually loads in the
    // connect->reduxForm?
    const { handleSubmit } = props;
    // console.log(props);
    // const checked = props.leagueInfo && props.leagueInfo.archived;
    // console.log(checked);
    console.log(props.leagueInfo && props.leagueInfo.archived);
    return (
        <div style={cssContent.body}>
            <h1 style={cssDashboard.title}>Enter New League Name</h1>
            <form
                onSubmit={handleSubmit}
                style={cssDashboard.form}
                >
                <div style={cssDashboard.teams.forms.edit.checkboxDiv}>
                    <Field
                        checked={props.leagueInfo && props.leagueInfo.archived}
                        component={Checkbox}
                        label='Check if team is active'
                        labelPosition='left'
                        labelStyle={cssDashboard.teams.forms.edit.checkbox}
                        name='archived'
                    />
                </div>
            </form>
        </div>
    );
};

LeagueArchiveForm.propTypes = {
    handleSubmit: PropTypes.func
};

function mapStateToProps(state) {
    console.log('mapping state to props');
    const id = state.league.selected;
    return {
        leagueId: state.league.selected,
        leagueInfo: state.league[id],
        snackbar: state.snackbar
    };
}

export default connect(mapStateToProps)(reduxForm({
    form: 'LeagueArchiveForm',
    onSubmit: editLeague,
    onSubmitSuccess: openSnackbar
})(LeagueArchiveForm));

// export default reduxForm({
//     form: 'LeagueArchiveForm',
//     onSubmit: editLeague,
//     onSubmitSuccess: openSnackbar
// })(LeagueArchiveForm);
