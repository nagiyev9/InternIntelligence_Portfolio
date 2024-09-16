// Path 
const mongoose = require('mongoose');

// Schema 
const AchieveSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Model 
const Achieve = mongoose.model('achievements', AchieveSchema);

module.exports = Achieve;