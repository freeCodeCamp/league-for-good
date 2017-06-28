const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('dotenv').config();

const models = require('./models/index');
const Routes = require('./api/index');
const passportConfig = require('./services/auth');

const MONGO_URI = process.env.MONGO_URI;
const MongoStore = require('connect-mongo')(session);

const path = require('path');


mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: process.env.SESSION_SECRET,
	store: new MongoStore({
		url: MONGO_URI,
		autoReconnect: true
	})
}));


app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// define all routes here
app.use('/auth', Routes.auth);
app.use('/league', Routes.league);
app.use('/team', Routes.team);
app.use('/player', Routes.player);
app.use('/settings', Routes.settings);
app.use('/register', Routes.registration);

// Disable webpack build if debugging backend functionality

if (process.env.NODE_ENV !== 'backend-dev') {
	const webpackMiddleware = require('../webpack.dev.middleware');
	app.use(webpackMiddleware);
} else {
	app.get('/', (req, res) => {
		res.json({user: req.user});
	});
}

app.get('*', (req, res) => res.redirect('/'));
// Temporary fix for syncing up with react-routers urls
// avoids causing a server-side error when refreshing browser on the /login page

module.exports = app;
