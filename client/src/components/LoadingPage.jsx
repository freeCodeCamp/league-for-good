import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
	position:'absolute',
	top:0,
	left:0,
	width:'100%',
	height: '100%',
	background:'white',
	zIndex:2001,
	display:'flex',
	justifyContent: 'center',
	alignItems:'center',
};

const Loading = () => (
	<div style={style}>
		<CircularProgress size={80} thickness={3.5}/>
	</div>
);

export default Loading;
