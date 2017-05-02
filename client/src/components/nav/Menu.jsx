import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import {MenuItem} from 'material-ui/Menu';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import AccoutBox from 'material-ui/svg-icons/action/account-box';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import LogOutModal from './logOut.jsx';
const Menu = props => {
    const { open, logOut } = props;
 
    return (
    <Drawer open={open}>
			<List style={{marginTop:70}}>
				<ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
				<ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
				<ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
				<ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
				<ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
				<LogOutModal logOut={logOut}/>
      </List>
    </Drawer>
	);
};

export default Menu;