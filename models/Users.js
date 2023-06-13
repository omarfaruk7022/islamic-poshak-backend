const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
