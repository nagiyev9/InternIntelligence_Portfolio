// Path 
const mongoose = require('mongoose');

// Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true,
        uniqe: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Model
const User = mongoose.model('users', UserSchema);

module.exports = User;