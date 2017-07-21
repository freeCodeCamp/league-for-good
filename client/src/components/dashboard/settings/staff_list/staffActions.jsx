import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
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

	openModal(staff, action) {
		if (action === 'edit') {
			this.props.openModal('editStaff', {
				initialValues: {
					...staff,
					origEmail: staff.email
				},
				roles: this.props.roles
			});
		} else {
			this.props.openModal('removeStaff', staff);
		}
	}

	render() {
		const { leagueId, action } = this.props;
		const { email, role } = this.props.staff;

		return (
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				onTouchTap={()=> this.openModal({ email, leagueId, role }, action) }
				>
				{action === 'edit' ?
					<EditIcon /> :
					<DeleteIcon />
				}
			</IconButton>
		);
	}
}

Icon.propTypes = {
	action: PropTypes.string,
	leagueId: PropTypes.string,
	openModal: PropTypes.func,
	staff: PropTypes.object
};

function mapStateToProps(state) {
	return { roles: state.roles };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
