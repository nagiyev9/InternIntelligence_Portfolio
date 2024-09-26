// Path 
const mongoose = require('mongoose');

// Schema 
const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Model 
const Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;