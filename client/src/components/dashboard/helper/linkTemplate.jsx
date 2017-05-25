// A template helper class to generate new links for panels under tabs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeManageView } from '../../../actions/index';
import IconButton from 'material-ui/IconButton';
import { css_content } from '../../style';


class LinkTemplate extends Component {
	
	render() {
		return (
			<IconButton
				tooltipPosition="bottom-right"
				tooltip={this.props.description}
				touch={true}
				onTouchTap={() => this.props.changeManageView(this.props.label)}
				style={css_content.iconNavbar.iconButton.style}
				iconStyle={this.props.view === this.props.label ?
					css_content.iconNavbar.iconButton.iconStyle : {}}
				hoveredStyle={css_content.iconNavbar.iconButton.hoveredStyle}
			>
				{this.props.icon}
			</IconButton>
		);
	}
}

function mapStateToProps(state) {
	return { view: state.manage.view };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeManageView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkTemplate);
