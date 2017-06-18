import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css_dashboard } from '../../../style';
import { openModal } from '../../../../actions/index';


//Returns an icon for the table - for deleting staff
class Icon extends Component {
	
	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
	}

	openModal(staff, action) {
		this.props.openModal('removeStaff', staff);
	}

	render() {
		const { email, leagueId, action } = this.props;
		
		return (
			<IconButton 
				onTouchTap={()=> this.openModal({ email, leagueId }, action) }
				hoveredStyle={css_dashboard.table.iconHover}
			>
				<DeleteIcon />
			</IconButton>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Icon);
