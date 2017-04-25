import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

const style = {

  height: 400,
  width: "60%",
  marginTop: '50px',
  marginLeft: '20%',
  textAlign: 'center',
  display: 'inline-block',
  background:'#37474F',
  color:"#00B0FF"		
}

class Content extends Component{

	render(){
		const {userName} = this.props;
		return(
			<div>
				{userName && 
					<Paper style={style} zDepth={3}>
						<h1>{`Welcome ${userName}!`}</h1>
					</Paper>
				}
			</div>
		)		
	}
}

function mapStateToProps(state){
	const {auth} = state;
	const userName = auth.user? auth.user.name : null

	return {userName}
}

export default connect(mapStateToProps)(Content)
