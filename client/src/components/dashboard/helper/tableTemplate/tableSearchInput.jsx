import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { cssDashboard } from '../../../style';
// Optional search for the table template

const SearchTable = (props) => {
	return (
		<TextField
			floatingLabelFixed={true}
			floatingLabelText={'Search ' + props.searchLabel}
			hintText={<SearchIcon />}
			onChange={props.onSearch}
			style={cssDashboard.table.search}
			underlineFocusStyle={cssDashboard.table.searchUnderline}
		/>
	);
};

SearchTable.propTypes = {
	onSearch: PropTypes.func,
	searchLabel: PropTypes.string
};

export default SearchTable;