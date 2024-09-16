// Path 
const mongoose = require('mongoose');

// Schema 
const FormSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    }
}, {
    timestamps: true
});

// Model 
const Form = mongoose.model('forms', FormSchema);

module.exports = Form;