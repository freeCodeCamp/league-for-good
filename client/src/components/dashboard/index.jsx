import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLeagues} from '../../actions/index';
import Toolbar from './toolbar.jsx';

class Dashboard extends Component{

	render(){
		const {league} = this.props;
		return(
			<div>
				{league &&
				<div>	
					<h2>{league.name}</h2>
					<h3>{`${league.sport_type} League`}</h3>
				</div>	
				}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {league: state.league.selected};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchLeagues},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)