import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const Button = () => (   
    <RaisedButton 
      label="Log In"
      href="/auth/google"
      labelStyle={{color:'#A7FFEB'}} 
      backgroundColor="#00695C"
    />
);

const LoginModal = props => {  
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
};

export default LoginModal;
