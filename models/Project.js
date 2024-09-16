// Path 
const mongoose = require('mongoose');

// Schema 
const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Model 
const Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;