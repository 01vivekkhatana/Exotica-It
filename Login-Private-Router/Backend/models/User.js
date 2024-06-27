// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   content: String,
// });

// const contentSchema = new mongoose.Schema({
//   content: String,
// });

// module.exports = mongoose.model("User", userSchema);
// module.exports = mongoose.model("Content", contentSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
