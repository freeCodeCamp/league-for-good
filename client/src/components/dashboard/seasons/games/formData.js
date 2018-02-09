import { createSelector } from 'reselect';

const getTeams = state => state.teams;
const getSeason = (state, props) =>
	props.location.state.season;
const getGame = (state, props) =>
	props.location.state.game;

export const getNewFormVals = () =>
	createSelector(
		[getTeams, getSeason],
		(teams, season) => {
			return {
				initialValues: { seasonId: season._id },
				title: 'Schedule a new game',
				teams
			};
		}
	);

export const getEditFormVals = () =>
	createSelector(
		[getTeams, getGame],
		(teams, game) => {

			return {
				teams,
				title: 'Edit Game',
				initialValues: game
			};
		}
	);
