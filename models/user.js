"use strict";

var mongoose = require('mongoose');

var User = mongoose.model('User', {
  userId: {
    type: String,
    required: true
  },
  preferences: {
    type: Array,
  }
})

module.exports = {
  User: User
}
