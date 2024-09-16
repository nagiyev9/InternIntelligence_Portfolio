// Path And Imports 
const Skill = require("../models/Skill");

// Get All Skills 
exports.getAllSkills = async () => {
    return await Skill.find();
};

// Get One Skill By ID
exports.getSkillByID = async id => {
    return await Skill.findOne({ _id: id });
};

// Get One Skill By Title
exports.getSkillByTitle = async title => {
    return await Skill.findOne({ title: title });
};

// Add New Skill    
exports.addSkill = async skill => {
    return await new Skill(skill).save();
};

// Edit Skill
exports.editSkill = async (id, skill) => {
    return await Skill.findOneAndUpdate(
        { _id: id },
        skill,
        { new: true, runValidators: true }
    );
};

// Delete Skill
exports.deleteSkill = async id => {
    return await Skill.findOneAndDelete({ _id: id });
};