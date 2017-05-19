import React from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const style = {
	iconHover: {
		color: '#000',
		backgroundColor: '#03A9F4',
		borderRadius: '25px',
	},
};

//Returns an icon for the table 
//In a seperate file from to keep all jsx seperate from the rest of the util functions
const Icon = props => {
	return (
		<IconButton hoveredStyle={style.iconHover}>
			{props.action === 'delete' ?
				<DeleteIcon /> :
				<EditIcon /> }
		</IconButton>
	);
};

export default Icon;
