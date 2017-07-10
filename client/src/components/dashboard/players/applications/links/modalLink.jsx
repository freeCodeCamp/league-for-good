import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../../../../style';
import { openModal } from '../../../../../actions/index';


class Icon extends Component {

	onClick = () => {
		const { player, action, leagueId } = this.props;
		if (action === 'assign') {
			this.props.openModal('assignPlayer', player);
		}		else {
			this.props.openModal('removePlayerApplication', { player, leagueId });
		}
	}
	render() {
		const { action } = this.props;

		return (
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				onTouchTap={()=> this.onClick() }
				>
				{action === 'delete' ?
					<DeleteIcon /> :
					<EditIcon /> }
			</IconButton>
		);
	}
}

Icon.propTypes = {
	action: PropTypes.string,
	leagueId: PropTypes.string,
	openModal: PropTypes.func,
	player: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(Icon);
