const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');


// Create a staff member on a league
const createStaff = (req, res) => {
	console.log(req.body);
	const query = { _id: req.body.league };
	const updateInfo = {
		staff: {
			email: req.body.email,
			role: req.body.roleTitle
		}
	};
	const update = { $push: updateInfo };

	League.findOneAndUpdate(query, update)
		.exec()
		.then(() => res.send(req.body))
		.catch(error => res.status(500).json({ error: error }));
};

// Update a staff member in a league
const updateStaff = (req, res) => {
	const query = { _id: req.body.leagueId, 'staff.email': req.params.email };
	const update = { $set: { 'staff.$.email': req.body.email, 'staff.$.role': req.body.roleTitle } };

	League.findOneAndUpdate(query, update)
		.exec()
		.then(() => res.send('Successfully edited staff.'))
		.catch(error => res.send({ msg: 'An error occured while editing staff', error }));
};

// Delete a staff member from a league
const deleteStaff = (req, res) => {
	console.log('query', req.query, 'params', req.params);
	const query = { _id: req.query.leagueId };
	const update = { $pull: { staff: { email: req.params.email } } };

	League.findOneAndUpdate(query, update)
		.exec()
		.then(() => res.send('Successfully removed staff.'))
		.catch(error => res.send({
			msg: 'An error occured while removing staff',
			error
		}));
};

Router.route('/create').post(createStaff);
Router.route('/update/:email').put(updateStaff);
Router.route('/remove/:email').delete(deleteStaff);

module.exports = Router;
