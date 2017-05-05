const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const logInUser = (req,res) => {
	req.logIn(req.user, err => {
		if(err) throw err;
		res.redirect('/');
	});
};

const logOutUser = (req, res) =>{
	req.logout();
	res.status(200).send('User logged out');
};

Router.route('/google')
  .get(passport.authenticate('google',{scope:['profile','email']}));


Router.route('/google/callback')
  .get(passport.authenticate('google',{failureRedirect: '/'}), logInUser);

Router.route('/logout')
  .post(logOutUser);

Router.route('/authenticate')
  .post((req,res) => { 
	if(req.user){
		res.send({user:req.user, loggedIn:true});
	}else{
		res.send({user:null, loggedIn:false});
	} 
});

module.exports = Router;  