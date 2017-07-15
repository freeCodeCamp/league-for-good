import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { cssDashboard } from '../../../style';

// IMPORTED STYLES
const { table: {
	sortArrowActiveColor,
	sortArrowInactiveColor,
	colHeaderLabelStyle,
	colHeaderStyle
}} = cssDashboard;

// column header with sorting icons
// when clicked will sort columns with asc, desc, or no order
const ColumnHeaderChild = props => {
	let arrowIcon = <noScript />;

	// Return early if column is not sortable
	if (!props.sortable) {
		return (
			<div style={colHeaderLabelStyle}>
				{props.label}
			</div>
		);
	}


	let columnSorted = props.colIndex === props.sortColumnIndex;
	let iconColor = columnSorted ? sortArrowActiveColor : sortArrowInactiveColor;

	// Determine appropriate icon and icon color
	if (props.sortDirection === 'asc') {
		if (columnSorted) {
			arrowIcon = <ArrowDown color={iconColor} />;
		} else {
			arrowIcon = <ArrowUp color={iconColor} />;
		}
	}	else if (props.sortDirection === 'desc') {
		arrowIcon = <ArrowUp color={iconColor} />;
	} else {
		// else, no sorting
		arrowIcon = <ArrowUp color={iconColor} />;
	}


	return (
		<div
			onClick={() => { props.onClick(props.colIndex); }}
			style={{...colHeaderLabelStyle, cursor: 'pointer'}}
			>
			{props.label}
			{arrowIcon}
		</div>
	);
};

ColumnHeaderChild.propTypes = {
	colIndex: PropTypes.number,
	label: PropTypes.string,
	onClick: PropTypes.func,
	sortColumnIndex: PropTypes.number,
	sortDirection: PropTypes.string,
	sortable: PropTypes.bool
};

export default ColumnHeaderChild;