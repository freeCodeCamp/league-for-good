const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const webpackMiddleware = require('../webpack.dev.middleware');

require("dotenv").config();

const models = require('./models/index');
const Routes = require('./api/index');
const passportConfig = require('./services/auth');
const MONGO_URI = process.env.MONGO_URI;
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));

const app = express();

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

app.use(webpackMiddleware);
app.use(passport.initialize());
app.use(passport.session());

//define all routes here
app.use('/auth', Routes.auth);
app.use('/league', Routes.league)

app.get('*', (req, res) => res.redirect('/'));
//Temporary fix for syncing up with react-routers urls
//avoids causing a server-side error when refreshing browser on the /login page

module.exports = app;
