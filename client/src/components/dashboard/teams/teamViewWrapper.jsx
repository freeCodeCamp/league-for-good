import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddTeamForm from './addTeamForm.jsx';

class TeamViewWrapper extends Component {

	render() {
		switch (this.props.view) {
			case 'Add':
				return <AddTeamForm />;
			default:
				return <noScript />;
		};
	}
}

// Callback function passed to the connect function to access the form state
function mapStateToProps(state){
	return { view: state.teams.view };
}

//Decorate component one last time with react-router bindings in order to redirect user
//after a successful form submission
export default connect(mapStateToProps)(TeamViewWrapper);

