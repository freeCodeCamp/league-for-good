import React, {Component} from 'react';

import { Redirect } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const Button = () => (
  <a href='/auth/google'>
    <RaisedButton 
      label='Log In'
      labelStyle={{color:'#A7FFEB'}} 
      backgroundColor="#00695C"
    />
  </a>
);

export default class LoginModal extends Component {
  
  render() {
    if(this.props.loggedIn){ 
      return <Redirect to='/'/>;
    }

    return (
      <div>
        <Dialog
          title="Log in with your Google+ account"
          titleStyle={{textAlign:'center'}}
          actions={<Button/>}
          modal={true}
          open={true}
        >
        </Dialog>
      </div>
    );
  }
}
