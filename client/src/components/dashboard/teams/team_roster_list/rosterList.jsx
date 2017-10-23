import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRoster } from './rosterData';

import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';
import { cssContent } from '../../../styles';
import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';


const Roster = ({roster, history}) => {

	const title = roster ? roster.name : '';

	if (!roster) {
		return (
			<div style={cssContent.body}>
				Loading...
			</div>
		);
	}

	return (
		<div style={cssContent.body}>
			<IconButton
				onTouchTap={() => history.goBack()}
				tooltip='Back to teams list'
				>
				<BackArrow/>
			</IconButton>
			<TableTemplate
				headers={roster.headers}
				rows={roster.players}
				title={title}
			/>
		</div>
	);
};

Roster.propTypes = {
	history: PropTypes.object,
	roster: PropTypes.object
};

const rosterSelector = getRoster();

function mapStateToProps(state, props) {

	return { roster: rosterSelector(state, props) };
}

export default connect(mapStateToProps)(Roster);
