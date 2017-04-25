const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  email:String,
  avatar:String,
  googleId:String,
  token:String
});

module.exports = mongoose.model('user', UserSchema);