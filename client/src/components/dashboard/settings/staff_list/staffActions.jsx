import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../../../style';
import { openModal } from '../../../../actions/index';


// Returns an icon for the table - for deleting staff
class Icon extends Component {

	constructor(props) {
		super(props);
		this.openModal = this.openModal.bind(this);
	}

	openModal(staff) {
		this.props.openModal('removeStaff', staff);
	}

	render() {
		const { email, leagueId } = this.props;

		return (
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				onTouchTap={()=> this.openModal({ email, leagueId }) }
				>
				<DeleteIcon />
			</IconButton>
		);
	}
}

Icon.propTypes = {
	action: PropTypes.string,
	email: PropTypes.string,
	leagueId: PropTypes.string,
	openModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Icon);
