// Path 
const mongoose = require('mongoose');

// Schema 
const FormSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, {
    timestamps: true
});

// Model 
const Form = mongoose.model('forms', FormSchema);

module.exports = Form;