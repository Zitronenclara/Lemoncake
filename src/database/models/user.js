const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userid: String,
    version: Number,
    moduleData: Object
});

module.exports = mongoose.model("User", userSchema, "userdata")