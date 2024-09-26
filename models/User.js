// Path 
const mongoose = require('mongoose');

// Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        uniqe: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Model
const User = mongoose.model('users', UserSchema);

module.exports = User;