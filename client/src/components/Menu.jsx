import React,{Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <div>
        <FlatButton 
          style = {{color:'white'}}
          onTouchTap = {this.handleToggle}
          icon = { <MenuIcon/>} />
        <Drawer 
          docked = {false}
          onRequestChange={(open) => this.setState({open})}
          open = {this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}