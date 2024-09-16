// Path And Imports 
const Project = require("../models/Project");

// Get All Projects 
exports.getAllProjects = async () => {
    return await Project.find();
};

// Get One Project By ID
exports.getProjectByID = async id => {
    return await Project.findOne({ _id: id });
};

// Add New Project 
exports.addProject = async project => {
    return new Project(project).save();
};

// Edit Project 
exports.editProject = async (id, project) => {
    return await Project.findOneAndUpdate(
        { _id: id },
        project,
        { new: true, runValidators: true }
    );
};

// Delete Project 
exports.deleteProject = async id => {
    return await Project.findOneAndDelete({ _id: id });
};