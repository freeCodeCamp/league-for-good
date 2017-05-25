import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import modalMapping from './mappings.jsx';
import * as submitActions from '../../actions/index';

import { css_modal } from '../style';

class Modal extends Component {

  handleClose = () => {
    this.props.dispatch({type: 'CLOSE_MODAL'});
  };


  getAction = () => {
    const { view, dispatch } = this.props;
    const { onSubmit } = modalMapping[view];
    
    return  bindActionCreators({ 
      handleSubmit: submitActions[onSubmit]
    }, dispatch); 
  };

  render() {
    const { view, open, data } = this.props;
    
    const { title, children } = modalMapping[view];
    
    const handleSubmit = this.getAction().handleSubmit;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=> handleSubmit(data)}
      />,
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
          {children}
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps({modal}){
  const { open, view, data } = modal; 
  return { open, view, data };
}


export default connect(mapStateToProps)(Modal);
