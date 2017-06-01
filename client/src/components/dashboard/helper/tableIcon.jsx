import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ViewRosterIcon from 'material-ui/svg-icons/social/people';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css_dashboard } from '../../style';
import { openModal } from '../../../actions/index';

const actionIcons = {
	'editTeam': <EditIcon />,
	'deleteTeam': <DeleteIcon />,
	'viewRoster': <ViewRosterIcon />,
};


// Returns an icon for the tables - is used to control which modal will
// open when icon is clicked on a table 
class Icon extends Component {
	
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(team, action) {
	
		switch (action) {
		
		case 'editTeam':
			this.props.openModal('editTeam', {initialValues: {...team}});
			break;
		case 'deleteTeam':
			this.props.openModal('removeTeam', team);
			break;
		case 'viewRoster':
			this.props.openModal('viewRoster', team);
			break;
		}
	}
	
	render() {
		const { team, action } = this.props;
		
		return (
			<IconButton 
				onTouchTap={()=> this.onClick(team, action)}
				hoveredStyle={css_dashboard.table.iconHover}
			>
				{ actionIcons[action] }
			</IconButton>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Icon);
