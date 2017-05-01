import React,{Component} from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import LogOutIcon from 'material-ui/svg-icons/action/exit-to-app';


export default class LogOutModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=> this.props.logOut()}
      />,
    ];

    return (
      <div>
        <ListItem
          primaryText="Log out"
          onTouchTap={this.handleOpen}
          leftIcon={<LogOutIcon/>}
        />
        <Dialog
          titleStyle={{textAlign:'center',background:'#FF5722',color:'#212121'}}
          title="Are you sure you want to log out?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

