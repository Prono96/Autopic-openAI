const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return v === this.password;
      },
      message: 'Passwords do not match'
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;