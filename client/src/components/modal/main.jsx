import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import modalMapping from './mappings.jsx';
import * as submitActions from '../../actions/index';

var styles = {
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  dialogContent: {
    position: 'relative',
    width: '90%',
    maxWidth: 800,
  },
  dialogBody: {  
    paddingBottom: 0,
  },
  title: {
    textAlign:'center',
    background:'#FF5722',
    color:'#212121',
  },
};


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
          contentStyle={styles.dialogContent}
          bodyStyle={styles.dialogBody}
          title={title}
          titleStyle={styles.title}
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