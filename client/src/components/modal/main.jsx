import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { submit } from 'redux-form';

import modalMapping from './mappings.jsx';
import * as submitActions from '../../actions/index';

import { css_modal } from '../style';

class Modal extends Component {

  handleClose = () => {
    this.props.dispatch({type: 'CLOSE_MODAL'});
  };


  getAction = () => {
    const { view, dispatch } = this.props;
    const { onSubmit, reduxFormName } = modalMapping[view];
    
    //HAndle edge case in which ReduxForm component is being used as child content
    //and needs to be submitted remotely via a modal action
    if( reduxFormName ){
      return { handleSubmit:() => dispatch(submit(reduxFormName)) };
    }    

    return  bindActionCreators({ 
      handleSubmit: submitActions[onSubmit]
    }, dispatch); 
  };

  render() {
   
    const { view, open, data } = this.props;
  
    const { title, Children, actionLabel } = modalMapping[view];
    
    const handleSubmit = this.getAction().handleSubmit;

    const actions = [
      <RaisedButton
      	label={actionLabel || "Submit"}
        labelStyle={css_modal.raisedButton.label} 
		backgroundColor={css_modal.raisedButton.backgroundColor}
		style={css_modal.raisedButton.style}
        onTouchTap={() => handleSubmit(data)}
      />,
      <RaisedButton
        label="Cancel"
        labelStyle={css_modal.raisedButton.label} 
		backgroundColor={css_modal.raisedButton.backgroundColor}
		style={css_modal.raisedButton.style}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          contentStyle={css_modal.dialogContent}
          bodyStyle={css_modal.dialogBody}
          title={title}
          titleStyle={css_modal.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          {!!Children ? <Children {...data} /> : null}
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps({modal}) {
	const { open, view, data } = modal; 
	return { open, view, data };
}


export default connect(mapStateToProps)(Modal);
