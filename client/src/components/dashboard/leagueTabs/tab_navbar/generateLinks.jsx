import React from 'react';
import LinkTemplate from './linkTemplate.jsx';

// Generate the links for the nav bar
// @param: links
//		Links contains an array of objects describing what
//		each info each card link will have
// @return: an array of <LinkTemplate /> components
export function generateLinks(links, leagueId) {
	return (
		links.map((linkProps, i) => {
			return (
				<LinkTemplate
					key={i}
					leagueId={leagueId}
					{...linkProps}
				/>
			);
		})
	);
}
