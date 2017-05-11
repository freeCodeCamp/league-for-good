import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CreateLeagueForm from './create-league/CreateLeagueForm.jsx';
import NavBar from './nav/index.jsx';
import Dashboard from './dashboard/dashboard.jsx';

const paperStyle = {
	width:'90%',
	margin:'40px auto',
	height: 'auto',
	textAlign: 'center',
	background:'#f4f6f7',
	color:'#37474F',
	border:'1px solid #607D8B',
};

class Content extends Component {
	render() {
		const {menuOpen, league} = this.props;

		return (
			<div>
				<NavBar/>
					<div className={menuOpen ? 'content-wrapper': 'content-wrapper-expanded'}>
							<Paper style={paperStyle} zDepth={3}>
								<Route exact path="/" component={Dashboard}/>
								<Route path="/dashboard" component={Dashboard}/>
								<Route path="/create" component={CreateLeagueForm} />
							</Paper>
					</div>
			</div>
		);	
	}
}

function mapStateToProps(state) {
	const { menu} = state;
	

	return { menuOpen: menu.open};
}

export default connect(mapStateToProps)(Content);
