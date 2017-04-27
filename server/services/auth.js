const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/user');


passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((id, done) => {
	done(null,id);
});

passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL
	},
	(token, refreshToken, profile, cb) => {
    
		if (!profile) return cb("Invalid credentials");
    
		User.findOne({ googleId: profile.id }, (err, user) => {
      
			if (err) return cb(err);

			if (!user) {

				const newUser = new User({
				name:profile.displayName,
				googleId: profile.id,
				avatar:profile.photos[0].value,
				token,
				email:profile.emails[0].value
			})
			
			newUser.save();
			console.log("New user created", newUser);
			return cb(null, newUser);
		}
		else {
			user.token = token;
			user.save();
			console.log("updated user token", token);
			return cb(null, user);
		}
		});
	}
));

