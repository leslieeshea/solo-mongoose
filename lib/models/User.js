const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  handle: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
