import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';


import CreateLeagueCard from './create-league/index.jsx';
import { createLeague, initAuthState } from '../actions/index.js';
import NavBar from './nav/index.jsx';

const paperStyle = {
	width:'90%',
	margin:'40px auto',
	height: 'auto',
	minHeight: '400px',
	textAlign: 'center',
	background:'#f4f6f7',
	color:"#37474F",
	border:'1px solid #607D8B'		
};

class Content extends Component {
	render() {
		const {menuOpen, league} = this.props;

		return (
			<div>
				<NavBar/>
					<div className={menuOpen ? 'content-wrapper': 'content-wrapper-expanded'}>
							<Paper style={paperStyle} zDepth={3}>
								<Route path="/create" component={CreateLeagueCard} />
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
