import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class LoginModal extends React.Component {

  render() {

    return (
      <div>
        <Dialog
          title="Log in with your Google+ account"
          actions={<a>Click here please</a>}
          modal={true}
          open={true}
        >
        </Dialog>
      </div>
    );
  }
}