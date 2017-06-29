import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../../../style';
import { openModal } from '../../../../actions/index';


// Returns an icon for the table - either for deleting or editing a team
class Icon extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(team, action) {
		if (action === 'edit') {
			this.props.openModal('editTeam', {initialValues: {...team}});
		}		else {
			this.props.openModal('removeTeam', team);
		}
	}
	render() {
		const { team, action } = this.props;

		return (
			<IconButton
				onTouchTap={()=> this.onClick(team, action) }
				hoveredStyle={cssDashboard.table.iconHover}
				>
				{action === 'delete' ?
					<DeleteIcon /> :
					<EditIcon /> }
			</IconButton>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Icon);
