import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

const style = {
	width:'90%',
	margin:'40px auto',
	height: 400,
	textAlign: 'center',
	background:'#ECEFF1',
	color:"#37474F",
	border:'1px solid #607D8B',
	textShadow:'1px 0px 2px #607D8B'		
};

class Content extends Component {
	render() {
		const {userName, menuOpen} = this.props;
		return (
			<div className={menuOpen? 'content-wrapper': 'content-wrapper-expanded'}>
				{userName && 
					<Paper style={style} zDepth={3}>
						<h1>{`Hello ${userName}!`}</h1>
					</Paper>
				}
			</div>
		);	
	}
}

function mapStateToProps(state) {
	const {auth, menu} = state;
	const userName = auth.user? auth.user.name : null;

	return {userName, menuOpen:menu.open};
}

export default connect(mapStateToProps)(Content);
