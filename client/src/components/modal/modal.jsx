import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { submit } from 'redux-form';

import modalMapping from './modalMappings.jsx';
import * as submitActions from '../../actions/index';

import { cssModal } from '../style';

class Modal extends Component {

	handleClose = () => {
		this.props.dispatch({type: 'CLOSE_MODAL'});
	};


	getAction = () => {
		const { view, dispatch } = this.props;
		const { onSubmit, reduxFormName } = modalMapping[view];

		// HAndle edge case in which ReduxForm component is being used as child content
		// and needs to be submitted remotely via a modal action
		if ( reduxFormName ) {
			return { handleSubmit: () => dispatch(submit(reduxFormName)) };
		}

		return bindActionCreators({
			handleSubmit: submitActions[onSubmit]
		}, dispatch);
	};

	render() {

		const { view, open, data } = this.props;

		const { title, Children, actionLabel } = modalMapping[view];

		const handleSubmit = this.getAction().handleSubmit;

		const actions = [
			<RaisedButton
				label={actionLabel || 'Submit'}
				labelStyle={cssModal.raisedButton.label}
				backgroundColor={cssModal.raisedButton.backgroundColor}
				style={cssModal.raisedButton.style}
				onTouchTap={() => handleSubmit(data)}
			/>,
			<RaisedButton
				label='Cancel'
				labelStyle={cssModal.raisedButton.label}
				backgroundColor={cssModal.raisedButton.backgroundColor}
				style={cssModal.raisedButton.style}
				onTouchTap={this.handleClose}
			/>
		];

		return (
			<div>
				<Dialog
					contentStyle={cssModal.dialogContent}
					bodyStyle={cssModal.dialogBody}
					title={title}
					titleStyle={cssModal.title}
					actions={actions}
					modal={false}
					open={this.props.open}
					onRequestClose={this.handleClose}
					>
					{Children ? <Children {...data} /> : null}
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({ modal, league }) {
	const { open, view, data } = modal;
	return { open, view, data };
}


export default connect(mapStateToProps)(Modal);
