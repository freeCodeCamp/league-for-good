const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require("./models/user");
require("dotenv").config();

const passportConfig = require('./services/auth');
const MongoStore = require('connect-mongo')(session);


const app = express();

const MONGO_URI = process.env.MONGO_URI;


mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB instance.'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,
	store: new MongoStore({
		url: MONGO_URI,
		autoReconnect: true
	})
}));

app.use(passport.initialize());
app.use(passport.session());


app.get("/auth/google",
	passport.authenticate('google', { scope: ['profile','email'] })
);

app.get("/auth/google/callback",
	passport.authenticate('google', { failureRedirect: '/' }),
		function(req, res) {
			req.logIn(req.user, function(err) {
			res.redirect("/");
		}
	)
});

app.post('/logout', function(req, res) {
	req.logout();
	console.log("User has been logged out");
	res.status(200).send("User logged out");
});

app.post('/authenticate', function(req, res) {
	if (req.user) {
		console.log("User has a current session");
		res.send(req.user);
	}
	else {
    User.findOne({token:req.body.token}).exec()
		.then(user => {res.send(user)})
		.catch(err => res.send(err))
	}
});


const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
