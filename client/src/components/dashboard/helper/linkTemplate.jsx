// A template helper class to generate new cards for sections under tabs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTeamManageView } from '../../../actions/index';
import IconButton from 'material-ui/IconButton';

// CSS for the cards
const style = {
	icon: {
		margin: '10px',
	},
	iconHover: {
		backgroundColor: "#03A9F4",
		borderRadius: '25px',
	},
};

class CardTemplate extends Component {
	
	render() {
		return (
			<IconButton
				tooltipPosition="bottom-right"
				tooltip={this.props.description}
				touch={true}
				onTouchTap={() => this.props.changeTeamManageView(this.props.label)}
				style={style.icon}
				hoveredStyle={style.iconHover}
			>
				{this.props.icon}
			</IconButton>
		);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeTeamManageView }, dispatch);
}

export default connect(null, mapDispatchToProps)(CardTemplate);
