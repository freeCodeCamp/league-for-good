const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('user');


passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((id, done) => {
	done(null,id);
});

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
	(token, refreshToken, profile, cb) => {
		if (!profile) return cb('Invalid credentials');
    
		User.findOne({ googleId: profile.id })
			.exec() 
      .then(user => {
			
	if (!user) {
		const newUser = new User({
			name:profile.displayName,
			googleId: profile.id,
			avatar:profile.photos[0].value,
			email:profile.emails[0].value,
		});
				
		newUser.save();
		return cb(null, newUser);
	}
	else {
		return cb(null, user);
	}
})
			.catch(err => cb(err));
	})
);


