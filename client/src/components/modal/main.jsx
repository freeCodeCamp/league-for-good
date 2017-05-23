import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { submit } from 'redux-form';

import modalMapping from './mappings.jsx';
import * as submitActions from '../../actions/index';

var styles = {
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
  
    const { title, Children } = modalMapping[view];
    
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
          title={title}
          titleStyle={styles.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          {Children? <Children {...data}/> : null}
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
