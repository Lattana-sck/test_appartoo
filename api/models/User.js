const mongoose = require('mongoose');

const User = new mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        role: {
            type: String,
            default: "user",
        },
        friends: {
            type: Array,
            default: [],
        },
    },{ timestamps:true }
));

module.exports = User;