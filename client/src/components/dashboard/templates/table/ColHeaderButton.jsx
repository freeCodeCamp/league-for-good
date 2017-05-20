import React from 'react';
import style from './style';
import FlatButton from 'material-ui/FlatButton';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

const ArrowIcon = props => {
	const { sortable, selected, direction } = props;
	const { sortArrowActiveColor, sortArrowInactiveColor } = style;
	const iconColor = selected ? sortArrowActiveColor : sortArrowInactiveColor;

	if(!sortable){
		return <noScript/> ;
	}
	
	if(selected){
		if(direction === 'asc'){
			return <ArrowDown color={iconColor}/> ;
		}
		else{
			<ArrowUp color={iconColor}/>;
		}
	}
	return <ArrowUp color={iconColor}/>;
};

// column header with sorting icons
const ColumnHeaderChild = (props) => {

	return (
		<FlatButton 
			label={props.label}
			icon={<ArrowIcon {...props} />}
			hoverColor="#fff"
			labelStyle={style.colHeaderButtonLabel}
			style={style.colHeaderStyle}
			labelPosition="before"
			disabled={!props.sortable}
			disableTouchRipple={true}
			onTouchTap={() => { props.onClick(props.colIndex); }}
		/>
	);
};

export default ColumnHeaderChild;