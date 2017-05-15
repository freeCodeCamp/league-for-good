import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

class FormSubmissionSnackbar extends Component {
  render(){
    return (
      <div>
        <Snackbar
        	open={this.props.open}
        	message={this.props.message}
    	    autoHideDuration={4000}
	        onRequestClose={this.props.handleClose}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  const { snackbar : { open, message } } = state;
  return { open, message };
}

function mapDispatchToProps(dispatch){
  const action = { type: 'CLOSE_SNACKBAR' };
  return { handleClose: ()=> dispatch(action) };
}

<<<<<<< HEAD
export default connect( mapStateToProps, mapDispatchToProps )( FormSubmissionSnackbar );
=======
export default connect(mapStateToProps, mapDispatchToProps)(FormSubmissionSnackbar);
>>>>>>> fb27227327704431ad55d7b34bbe59c9ca314d1e
