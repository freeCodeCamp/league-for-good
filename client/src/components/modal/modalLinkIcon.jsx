import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../style';
import { openModal } from '../../actions/index';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import CheckCircleIcon from 'material-ui/svg-icons/action/check-circle';

const getIcon = action => {
	const map = {
		edit: EditIcon,
		checkCircle: CheckCircleIcon,
		remove: DeleteIcon
	};

	return map[action];
};

const ModalLink = props => {
	const {
		action,
		modalView,
		modalData,
		openModal
	} = props;

	const IconSVG = getIcon(action);

	return (
		<IconButton
			hoveredStyle={cssDashboard.table.iconHover}
			onTouchTap={()=> openModal(modalView, modalData)}
			>
			<IconSVG/>
		</IconButton>
	);

};

ModalLink.propTypes = {
	action: PropTypes.string,
	modalData: PropTypes.object,
	modalView: PropTypes.string,
	openModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalLink);

