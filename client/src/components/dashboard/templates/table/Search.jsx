import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import style from './style';

// Search the table
const SearchTable = (props) => {
	return (
		<TextField 
			hintText={<SearchIcon />}
			underlineFocusStyle={style.searchUnderline}
			style={style.search}
			floatingLabelText="Search"
			floatingLabelFixed={true}
			onChange={props.onSearch}
		/>
	);
};

export default SearchTable;