// Path And Imports 
const projectService = require('../services/project-service');
const fs = require('fs');

// Get All Project 
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get One Project By ID 
exports.getProjectByID = async (req, res) => {
    const id = req.params.id;
    try {
        const project = await projectService.getProjectByID(id);
        res.status(200).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Project 
exports.addProject = async (req, res) => {
    const project = req.body;
    project.image = req.file.filename;
    try {
        const newProject = await projectService.addProject(project);
        res.status(201).json({
            status: 201,
            message: 'Project Added Succesfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Project
exports.editProject = async (req, res) => {
    const id = req.params.id;
    const project = req.body;
    console.log(req.body);
    let image = req.body.image;
    try {
        if (req.file) {
            image = req.file.filename;

            fs.unlink('./public/images', + req.body.image, (err) => {
                console.log(err);
            });
        };

        const editedProject = await projectService.editProject(id, project);
        res.status(200).json({
            status: 200,
            message: 'Project editted successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Project
exports.deleteProject = async (req, res) => {
    const id = req.params.id;
    try {
        const project = await projectService.deleteProject(id);
        res.status(200).json({
            status: 200,
            message: 'Project Deleted Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);  
    };
};