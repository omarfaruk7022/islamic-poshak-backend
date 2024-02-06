import { Schema, model } from "mongoose";

const usersSchema = new Schema({
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


const Users = model("Users", usersSchema);

export default Users;
