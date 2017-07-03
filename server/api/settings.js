const express = require('express');

const Router = express.Router();
const mongoose = require('mongoose');

const League = mongoose.model('league');


const createStaff = (req, res) => {
	const query = { _id: req.body.league };
	const update = { $push: { staff: req.body.email } };

	League.update(query, update)
		.exec()
		.then(() => res.send(req.body))
		.catch(error => res.status(500).json({ error: error }));
};

const deleteStaff = (req, res) => {
	const query = { _id: req.query.leagueId };
	const update = { $pull: { staff: req.params.email } };

	League.update(query, update)
		.exec()
		.then(() => res.send('Successfully removed staff.'))
		.catch(error => res.send({
			msg: 'An error occured while removing staff',
			error
		}));
};

Router.route('/create').post(createStaff);
Router.route('/remove/:email').delete(deleteStaff);

module.exports = Router;
