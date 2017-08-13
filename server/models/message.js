const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'user'
  },
  to: {
    type: mongoose.Schema.ObjectId,
    ref: 'user'
  }
});

MessageSchema.methods.toJSON = function (){
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['text', 'creator', 'to', '_id']);
};

var Message = mongoose.model('message', MessageSchema);

module.exports = Message;
