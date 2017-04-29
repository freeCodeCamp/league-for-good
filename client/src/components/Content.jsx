import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from './LoadingPage.jsx';

import CreateLeagueCard from './create-league/index.jsx';
import CreateLeagueCardForm from './create-league/CreateLeagueCardForm.jsx';
import { createLeague, initAuthState } from '../actions/index.js';


const style = {
	width:'90%',
	margin:'40px auto',
	height: 'auto',
	textAlign: 'center',
	background:'#f4f6f7',
	color:"#37474F",
	border:'1px solid #607D8B'		
};

class Content extends Component {

	onClick(sport) {
		this.props.createLeague(sport);
	}
	// componentDidMount(){
	// 	this.props.initAuthState()
	// }
	render() {
		const {userName, menuOpen, loading, league} = this.props;

		return (
			<div className={menuOpen? 'content-wrapper': 'content-wrapper-expanded'}>
					<Paper style={style} zDepth={3}>
						<CreateLeagueCard onClick={this.onClick.bind(this)} />
						<CreateLeagueCardForm sportType={league.sportType} />
					</Paper>
			</div>
		);	
	}
}

function mapStateToProps(state) {
	const {auth, menu, createLeague} = state;
	const userName = auth.user? auth.user.name : null;

	return { userName, menuOpen: menu.open, league: createLeague };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createLeague, initAuthState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
