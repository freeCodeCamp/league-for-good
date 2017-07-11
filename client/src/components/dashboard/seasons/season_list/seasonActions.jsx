import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cssDashboard } from '../../../style';
import { openModal } from '../../../../actions/index';


// Returns an icon for the table - either for deleting or editing a season
class SeasonIcon extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(season, action) {
		if (action === 'edit') {
			this.props.openModal('editSeasons', { initialValues: season });
		} else {
			this.props.openModal('removeSeason', season);
		}
	}
	render() {
		const { season, action } = this.props;

		return (
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				onTouchTap={()=> this.onClick(season, action) }
				>
				{action === 'delete' ?
					<DeleteIcon /> :
					<EditIcon /> }
			</IconButton>
		);
	}
}

SeasonIcon.propTypes = {
	action: PropTypes.string,
	initialValues: PropTypes.object,
	openModal: PropTypes.func,
	season: PropTypes.object
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(SeasonIcon);
