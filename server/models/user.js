const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  status: {
    type: Boolean,
    default: false
  },
  lat: {
    type: Number,
    trim: true,
    default: null
  },
  lon: {
    type: Number,
    trim: true,
    default: null
  },
  messages: [{
    type: mongoose.Schema.ObjectId,
    ref: 'message'
  }]
});

UserSchema.methods.toJSON = function (){
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['username', 'status', 'lat', 'lon', '_id']);
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({username});
};

var User = mongoose.model('user', UserSchema);

module.exports = User;
