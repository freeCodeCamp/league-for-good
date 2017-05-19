import React from 'react';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal } from '../../../../actions/index';

const style = {
	iconHover: {
		color: '#000',
		backgroundColor: '#03A9F4',
		borderRadius: '25px',
	},
};


//Returns an icon for the table 
//In a seperate file from to keep all jsx seperate from the rest of the util functions
class Icon extends React.Component {
	onClick = (team, action) => {
		if(action === 'edit') {
			return console.log('EDIT CLICKED');
		}
		else {
			this.props.openModal('removeTeam', team);
		}
	}
	render(){
		const { team, action } = this.props;

		return (
			<IconButton 
				onTouchTap={()=>this.onClick(team, action) }
				hoveredStyle={style.iconHover}
			>
				{action === 'delete' ?
					<DeleteIcon /> :
					<EditIcon /> }
			</IconButton>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({openModal}, dispatch);
};

export default connect(null, mapDispatchToProps)(Icon);
