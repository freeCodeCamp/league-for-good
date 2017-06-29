import EditTeamForm from '../dashboard/teams/forms/editTeamForm.jsx';
import DeleteTeamForm from '../dashboard/teams/forms/deleteTeamForm.jsx';
import DeleteStaffForm from
	'../dashboard/settings/forms/deleteStaffForm.jsx';
import DeletePlayerRegForm from
	'../dashboard/players/applications/modals/delete.jsx';
/* Map all components and/or props to be used inside the main modal component
	Required:
		title -    (STRING) The modals title prop
		Children - (function/null) Components to be rendered inside the modal
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

		Pretend that a button was clicked that triggered the action:
			openModal('EditLeague')
			(see the ../nav/menu for an example of how this is
			used to trigger the Log Out modal)
		Now this.props.modal will be set to: {open: true, view: 'EditLeague'}

		The modal component will update itself by calling:
		  mappings[this.props.modal.view] (see the main.jsx file)

*************
	Note: The Children key in the object must be capitalized for the modal to
		   render correctly with Material UI
*************
*/

const mappings = {
	default: {
		title: '',
		Children: null,
		onSubmit: null
	},

	logout: {
		title: 'Logout',
		Children: null,
		onSubmit: 'logOut',
		actionLabel: 'Logout'
	},
	removeTeam: {
		title: 'Delete Team',
		Children: DeleteTeamForm,
		onSubmit: 'removeTeam',
		actionLabel: 'Delete Team'
	},
	editTeam: {
		title: 'Edit Team',
		Children: EditTeamForm,
		onSubmit: null,
		reduxFormName: 'EditTeamForm',
		actionLabel: 'Edit Team'
	},
	removeStaff: {
		title: 'Delete Staff',
		Children: DeleteStaffForm,
		onSubmit: 'removeStaff',
		actionLabel: 'Delete Staff'
	},
	assignPlayer: {

	},
	removePlayerApplication: {
		title: 'Delete Player Application',
		Children: DeletePlayerRegForm,
		onSubmit: 'deletePlayerRegistration',
		actionLabel: 'Delete'
	}
};

export default mappings;
