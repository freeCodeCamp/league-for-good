import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LogInButton from './LogInButton.jsx';
import Menu from './Menu.jsx'

class NavBar extends React.Component {

  render() {
    return (
      <Toolbar style={{background:'#01579B'}}>     
        <ToolbarGroup firstChild={true} style={{textIndent:15}}>
          { this.props.isAuthenticated && <Menu /> }
          <ToolbarTitle text="League For Good" style={{color:'white'}}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <LogInButton {...this.props}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

function mapStateToProps(state){
  const {auth} = state
  return {isAuthenticated:auth.loggedIn, user:auth.user}
}

export default connect(mapStateToProps)(NavBar)

