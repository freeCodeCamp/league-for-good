// A template helper class to generate new cards for sections under tabs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTeamManageView } from '../../../actions/index';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// CSS for the cards
const style = {
	card: {
		width: (100 / 3) + '%',
		margin: '0',
		textAlign: 'left',
		float: 'left',
	},
	cardTitle: {
		height: '20px',
		paddingLeft: '10px',
		backgroundColor: '#03A9F4',
	},
	cardButton: {
		float: 'right',
		marginRight: '10px',
		marginBottom: '10px',
	},
};

class CardTemplate extends Component {
	
	render() {
		return (
			<Card style={style.card}>
				<CardTitle title={this.props.title} style={style.cardTitle} />
				<CardText>
					{this.props.description}
				</CardText>
				<CardActions>
					<FloatingActionButton 
						style={style.cardButton}
						onTouchTap={() => this.props.changeTeamManageView(this.props.label)}
					>
						{this.props.icon}
					</FloatingActionButton>
				</CardActions>
			</Card>
		);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeTeamManageView }, dispatch);
}

export default connect(null, mapDispatchToProps)(CardTemplate);
