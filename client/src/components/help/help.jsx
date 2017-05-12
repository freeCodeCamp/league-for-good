import React from 'react';
import { containerCSS, titleCSS, headerCSS, sectionCSS, ulContainerCSS, listCSS } from './helpCSS';

const Help = () => {
	return (
		<div style={containerCSS}>
			<h1 style={titleCSS}>Help</h1>
			<ul style={ulContainerCSS}>
				<li style={listCSS}><a href="#whatisthis">What is this?</a></li>
			</ul>
			<h2 style={headerCSS} name="whatisthis">What is this?</h2>
			<p style={sectionCSS}>
				This is a free application that allows people to manage leagues.
			</p>
		</div>
	);
};

export default Help;
