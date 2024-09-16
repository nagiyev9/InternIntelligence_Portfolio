// Path 
const mongoose = require('mongoose');

// Schema 
const SkillSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Model 
const Skill = mongoose.model('skills', SkillSchema);

module.exports = Skill;