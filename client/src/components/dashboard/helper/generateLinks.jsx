import React from 'react';
import LinkTemplate from './linkTemplate.jsx';

// Generate the links for the nav bar
// @param: links
//		Links contains an array of objects describing what
//		each info each card link will have
// @return: an array of <LinkTemplate /> components
export function generateLinks(links) {
	return (
		links.map((link, i) => {
			return (
				<LinkTemplate
					key={i}
					title={link.title}
					description={link.description}
					label={link.label}
					icon={link.icon}
				/>
			);
		})
	);
}
