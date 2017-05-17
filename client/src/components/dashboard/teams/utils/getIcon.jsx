import React from 'react';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

//Returns an icon for the table 
//In a seperate file from to keep all jsx seperate from the rest of the util functions
const Icon = props => {
	if(props.action == 'delete'){
		return <DeleteIcon/> ;
	}else{
		return <EditIcon/> ;
	}
};

export default Icon;