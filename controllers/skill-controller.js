// Path And Imports 
const skillService = require('../services/skill-service');

// Get All Skills 
exports.getAllSkills = async (req, res) => {
    try {
        const skills = await skillService.getAllSkills();
        res.status(200).json(skills);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get One Skill By ID
exports.getSkillByID = async (req, res) => {
    const id = req.params.id;
    try {
        const skill = await skillService.getSkillByID(id);
        res.status(200).json(skill);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Skill
exports.addSkill = async (req, res) => {
    const title = req.body;
    if (!title) {
        return res.status(403).json({ message: 'Please Provide Title' });
    };
    try {
        const isExist = await skillService.getSkillByTitle(title.title);

        if (isExist) {
            return res.status(400).json({
                status: 400,
                message: 'This skill already exist'
            });
        };

        const newSkill = await skillService.addSkill(title);
        res.status(201).json({
            status: 201,
            message: 'Skill Added Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Skill 
exports.editSkill = async (req, res) => {
    const title = req.body;
    const id = req.params.id;

    if (title === '') {
        return { message: 'Please Provide title' };
    };

    try {
        const isExist = await skillService.getSkillByTitle(title.title);

        if (isExist) {
            return res.status(400).json({
                status: 400,
                message: 'This skill already exist'
            });
        };

        const editSkill = await skillService.editSkill(id, title);
        res.status(200).json({
            status: 200,
            message: 'Skill Editted Successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Skill
exports.deleteSkill = async (req, res) => {
    const id = req.params.id;
    try {
        const skill = await skillService.deleteSkill(id);
        res.status(200).json({
            status: 200,
            message: 'Skill deleted successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};