import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';

const EditLink = props => {
	const url = {
		pathname: '/dashboard/seasons/games/edit',
		state: { game: props.game } 
	}
	return (
		<Link to={url}>
			<IconButton>
				<EditIcon/>
			</IconButton>
		</Link>
	)
}

export default EditLink;