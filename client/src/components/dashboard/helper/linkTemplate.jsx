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
	iconActive: {
		borderBottom: '4px solid #03A9F4',
		paddingBottom: '5px',
	},
	iconHover: {
		color: '#000',
		backgroundColor: '#03A9F4',
		borderRadius: '25px',
	},
};

class LinkTemplate extends Component {
	
	render() {
		return (
			<IconButton
				tooltipPosition="bottom-right"
				tooltip={this.props.description}
				touch={true}
				onTouchTap={() => this.props.changeTeamManageView(this.props.label)}
				style={style.icon}
				iconStyle={this.props.view === this.props.label ?
					style.iconActive : {}}
				hoveredStyle={style.iconHover}
			>
				{this.props.icon}
			</IconButton>
		);
	}
};

function mapStateToProps(state){
	return { view: state.teams.view };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeTeamManageView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkTemplate);
