const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cartData: {
    type: Object,
    default: {}
  }
}, { minimize: false });

userSchema.statics.register = async function (name, email, password) {
  if (!name || !email || !password) {
    throw Error('Name, email, and password are required');
  }

  if (!validator.isEmail(email)) {
    throw Error('Invalid email format');
  }

  if (password.length < 6) {
    throw Error('Password must be at least 6 characters');
  }

  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await this.create({ name, email, password: hashedPassword });
  return user;
};


userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('Email and password are required');
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error('Invalid credentials');
  }

  return user;
};

module.exports = mongoose.model('User', userSchema);
