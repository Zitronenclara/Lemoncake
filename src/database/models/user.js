const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userid: String
});

module.exports = mongoose.model("User", userSchema, "userdata")