const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const festivalSchema = new mongoose.Schema({
  festivalName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const Festival = mongoose.model("Festival", festivalSchema);

module.exports = {
  User,
  Festival,
};
