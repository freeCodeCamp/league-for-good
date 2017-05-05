import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchLeagues} from '../../actions/index';

class Dashboard extends Component{
	componentDidMount(){
		this.props.fetchLeagues()
	}
	render(){
		const {leagues} = this.props;
		return(
			<div>
				<h2>Leagues:</h2>

			</div>
		)
	}
}

function mapStateToProps(state){
	console.log(state.league.list);
	return {leagues: state.league.list};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchLeagues},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)