import React from 'react';
import { cssHelp } from '../style';

const Help = () => {
	return (
		<div style={cssHelp.container}>
			<h1 style={cssHelp.title}>Help</h1>
			<ul style={cssHelp.ul}>
				<li style={cssHelp.li}><a href='#whatisthis'>What is this?</a></li>
			</ul>
			<h2 name='whatisthis' style={cssHelp.sectionHeader}>What is this?</h2>
			<p style={cssHelp.section}>
				This is a free application that allows people to manage leagues.
			</p>
		</div>
	);
};

export default Help;
