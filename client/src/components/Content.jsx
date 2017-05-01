import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import CreateLeagueCard from './create-league/index.jsx';
import CreateLeagueCardForm from './create-league/CreateLeagueCardForm.jsx';
import { createLeague, initAuthState } from '../actions/index.js';
import NavBar from './nav/index.jsx';

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

	render() {
		const {menuOpen, league} = this.props;

		return (
			<div>
				<NavBar/>
					<div className={menuOpen? 'content-wrapper': 'content-wrapper-expanded'}>
							<Paper style={style} zDepth={3}>
								<CreateLeagueCard onClick={this.onClick.bind(this)} />
								<CreateLeagueCardForm sportType={league.sportType} />
							</Paper>
					</div>
			</div>
		);	
	}
}

function mapStateToProps(state) {
	const { menu, createLeague} = state;
	

	return { menuOpen: menu.open, league: createLeague };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({createLeague}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
