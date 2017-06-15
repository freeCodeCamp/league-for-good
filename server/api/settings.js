const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const League = mongoose.model('league');


const createStaff = (req, res) => {
	const query = { _id: req.body.league };
	const update = { "$push": { staff: req.body.email } };

	League.update(query, update)
		.exec()
		.then(() => res.send(req.body))
		.catch(error => res.status(500).json({ error: error }));
};


Router.route('/create').post(createStaff);

module.exports = Router;
