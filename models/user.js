const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        default: ""
    },
    user_pass: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;