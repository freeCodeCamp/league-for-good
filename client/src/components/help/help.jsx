import React from 'react';
import { css_help } from '../style';

const Help = () => {
	return (
		<div style={css_help.container}>
			<h1 style={css_help.title}>Help</h1>
			<ul style={css_help.ul}>
				<li style={css_help.li}><a href="#whatisthis">What is this?</a></li>
			</ul>
			<h2 style={css_help.sectionHeader} name="whatisthis">What is this?</h2>
			<p style={css_help.section}>
				This is a free application that allows people to manage leagues.
			</p>
		</div>
	);
};

export default Help;
