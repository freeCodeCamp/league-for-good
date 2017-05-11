import React from 'react';
import CardTemplate from './cardLinkTemplate.jsx';

// Generate the card links from
// @param: links
//		Links contains an array of objects describing what
//		each info each card link will have
// @return: an array of <CardTemplate /> components
export function generateCardLinks(links) {
	return (
		links.map((link, i) => {
			return (
				<CardTemplate
					key={i}
					title={link.title}
					description={link.description}
					label={link.label}
					icon={link.icon}
				/>
			);
		})
	);
};
