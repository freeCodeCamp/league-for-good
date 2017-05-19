import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import SnackBar from './snackbar.jsx';
import CreateLeagueForm from './create-league/CreateLeagueForm.jsx';
import NavBar from './nav/index.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Help from './help/help.jsx';
import Modal from './modal/main.jsx';

const paperStyle = {
	width:'90%',
	margin:'40px auto',
	height: 'auto',
	textAlign: 'center',
	background:'#fff',
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
								<Route path="/help" component={Help} />
							</Paper>
					</div>
					<Modal/>
					<SnackBar/>
			</div>
		);	
	}
}

function mapStateToProps(state) {
	const { menu } = state;
	

	return { menuOpen: menu.open};
}

export default connect(mapStateToProps)(Content);
