import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../../../style';
import { openModal } from '../../../../actions/index';


// Returns an icon for the table - either for deleting or editing a season
const SeasonIcon = props => {


	const { season, action, openModal } = props;
	const flag = action === 'edit';
	const view = flag ? 'editSeason' : 'removeSeason';
	const data = !flag ? season : { initialValues: season };
	const SvgIcon = flag ? EditIcon : DeleteIcon;


	return (
		<IconButton
			hoveredStyle={cssDashboard.table.iconHover}
			onTouchTap={()=> openModal(view, data)}
			>
			<SvgIcon/>
		</IconButton>
	);
};

SeasonIcon.propTypes = {
	action: PropTypes.string,
	openModal: PropTypes.func,
	season: PropTypes.object
};


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(SeasonIcon);
