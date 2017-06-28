import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { css_dashboard } from '../../../../style';
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
		const { player, action } = this.props;

		return (
			<IconButton
				onTouchTap={()=> this.onClick() }
				hoveredStyle={css_dashboard.table.iconHover}
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
