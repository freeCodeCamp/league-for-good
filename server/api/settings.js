const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const League = mongoose.model('league');


const createStaff = (req, res) => {
	console.log(req.body);
	const query = { _id: req.body.league };
	const updateInfo = {
		staff: {
			email: req.body.email,
			role: req.body.roleId
		}
	};
	const update = { '$push': updateInfo };

	League.findOneAndUpdate(query, update)
		.exec()
		.then(() => res.send(req.body))
		.catch(error => res.status(500).json({ error: error }));
};

const deleteStaff = (req, res) => {
	console.log('query', req.query, 'params', req.params);
	const query = { _id: req.query.leagueId };
	const update = { '$pull': { 'staff': { 'email': req.params.email } } };

	League.findOneAndUpdate(query, update)
		.exec()
		.then(() => res.send('Successfully removed staff.'))
		.catch(error => res.send({msg: 'An error occured while removing staff', error}));
};

Router.route('/create').post(createStaff);
Router.route('/remove/:email').delete(deleteStaff);

module.exports = Router;
