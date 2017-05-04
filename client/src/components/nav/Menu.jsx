import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

import LogOutModal from './logOut.jsx';

const Menu = props => {
    const { open, logOut } = props;
 
    return (
    <Drawer open={open}>
		<List style={{marginTop:70}}>
			<ListItem 
				primaryText="Create League"
				leftIcon={<AddCircle />}
				containerElement={<Link to="/create" />}
			/>
			<LogOutModal logOut={logOut} />
      </List>
    </Drawer>
	);
};

export default Menu;