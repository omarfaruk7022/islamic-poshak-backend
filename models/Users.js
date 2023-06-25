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
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
}); 


const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
