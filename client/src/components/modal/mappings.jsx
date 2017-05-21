import React from 'react';

/* Map all the components and/or props to be used inside the main modal component
	Required:
		title -    (STRING) The modals title prop;
		children - (function/null) Any components to be rendered inside the modal;
		onSubmit - (STRING) The name of the action that will be dispatched
	
	ex- 
		
		const LeagueForm = props => (
			<form> .... </form>
		);
		
		const mappings = {
			EditLeague: {
				title: 'Edit League',
				childen: LeagueForm(),
				onSubmit: 'submitLeagueEdits'
			}
		};

		Pretend that a button was clicked that triggered the action: openModal('EditLeague')
			(see the ../nav/menu for an example of how this is used to trigger the Log Out modal)
		Now this.props.modal will be set to: {open: true, view: 'EditLeague'}
		
		The modal component will update itself by calling: mappings[this.props.modal.view]
		 (see the main.jsx file)
*/

const mappings = {
	default: {
		title:'',
		children: null,
		onSubmit: null,
	},
	
	logout: {
		title: 'Are you sure you want to log out?',
		children: null,          
		onSubmit: 'logOut',
	},
	removeTeam: {
		title: 'Are you sure you want to permanently delete this team?',
		children: null,
		onSubmit: 'removeTeam',
	},
};

export default mappings;